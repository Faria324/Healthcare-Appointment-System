import jwt from "jsonwebtoken";

//user authentication middleware
const authUser = async (req, res, next) => {
  try {
    // Expect token in headers.authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const token = authHeader.split(" ")[1];

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = token_decode.id; // ✅ store it directly on req

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

export default authUser;
