// Import multer
import multer from "multer";

// Configure storage
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

// Create upload middleware
const upload = multer({
  storage: storage,
});

// Export upload middleware
export default upload;
