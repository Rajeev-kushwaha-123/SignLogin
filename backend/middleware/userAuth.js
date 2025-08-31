import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userAuth = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized, login again",
    });
  }

  try {
    // verify token
    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
    if(tokenDecoded.id){
          req.user = { id: tokenDecoded.id };
    }else{
          return res.json({
                success: false,
                message: "Not authorized, login again",
            });
    }
    next(); // pass control to next middleware/route
    
  } catch (error) {
    return res.json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default userAuth;
