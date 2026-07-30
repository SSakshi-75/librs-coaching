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
        secure: true,
        sameSite: "None",
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

export const registerAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !email.toLowerCase().endsWith('@gmail.com')) {
    return res.status(400).json({ message: "Only @gmail.com emails are allowed" });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  try {
    const adminExists = await Admin.findOne({ email: email.toLowerCase() });

    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({
      email: email.toLowerCase(),
      password,
    });

    if (admin) {
      const token = generateToken(admin._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.status(201).json({
        _id: admin._id,
        email: admin.email,
      });
    } else {
      res.status(400).json({ message: "Invalid admin data" });
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
    secure: true,
    sameSite: "None",
    expires: new Date(0)
  });
  res.json({ message: "Logged out successfully" });
};

export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const inquiry = await Contact.findByIdAndDelete(id);
    if (!inquiry) {
      return res.status(404).json({ message: "Inquiry not found" });
    }
    res.json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
