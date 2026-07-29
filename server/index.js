import express from "express";
import { config } from "dotenv";
import compression from "compression";
import cookieParser from "cookie-parser";
import Db from "./src/database/Db.js";
import cors from "cors";
import morgan from "morgan";
import contactRoutes from "./src/routes/contact.routes.js";
import adminRoutes from "./src/admin/admin.route.js";

config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({ 
  origin: [
    process.env.FRONTEND_URL, 
    "http://localhost:5173", 
    "https://librs-coaching.vercel.app"
  ].filter(Boolean), 
  credentials: true 
}));

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to Auto Generated Backend!");
});

app.use("/api/contact", contactRoutes);
app.use("/api/admin", adminRoutes);

Db().then(() => {
  app.listen(PORT, () =>
    console.log("🚀 Server running at http://localhost:" + PORT)
  );
});
