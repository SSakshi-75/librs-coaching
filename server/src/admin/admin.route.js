import express from "express";
import { loginAdmin, getInquiries, logoutAdmin, deleteInquiry, registerAdmin } from "./admin.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/inquiries", protectAdmin, getInquiries);
router.delete("/inquiries/:id", protectAdmin, deleteInquiry);

export default router;
