import { Admin } from "./admin.model.js";
import { Contact } from "../models/contact.model.js";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "default_secret", {
    expiresIn: "30d",
  });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email: email.toLowerCase() });
    if (admin && (await admin.matchPassword(password))) {
      const token = generateToken(admin._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
      });
      res.json({
        _id: admin._id,
        email: admin.email,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getInquiries = async (req, res) => {
  try {
    const inquiries = await Contact.find({}).sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const logoutAdmin = (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0)
  });
  res.json({ message: "Logged out successfully" });
};
