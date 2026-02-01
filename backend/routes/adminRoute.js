// Import required packages
import express from "express";

// Import controller
import { addDoctor, loginAdmin } from "../controllers/adminController.js";

// Import middleware
import upload from "../middlewares/multer.js";

// Create router instance
const adminRouter = express.Router();

// Define routes
adminRouter.post("/add-doctor", upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);

// Export router
export default adminRouter;
