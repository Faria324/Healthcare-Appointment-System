// Import required packages
import express from "express";

// Import controller
import {
  addDoctor,
  allDoctors,
  loginAdmin,
} from "../controllers/adminController.js";

// Import middleware
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

// Create router instance
const adminRouter = express.Router();

// Define routes
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availability", authAdmin, changeAvailability);


// Export router
export default adminRouter;
