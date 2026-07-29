import express from "express";
import { loginAdmin, getInquiries, logoutAdmin } from "./admin.controller.js";
import { protectAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/login", loginAdmin);
router.post("/logout", logoutAdmin);
router.get("/inquiries", protectAdmin, getInquiries);

export default router;
