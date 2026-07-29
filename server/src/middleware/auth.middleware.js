import jwt from "jsonwebtoken";
import { Admin } from "../admin/admin.model.js";

export const protectAdmin = async (req, res, next) => {
  let token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "default_secret");
      req.admin = await Admin.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }
  
  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
