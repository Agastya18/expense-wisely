import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const verifyUser = async(req, res,next) => {
    try {
    const token = req.cookies.authtoken 
        //console.log(token)
         if (!token) {
             return res.status(401).json({ message: "You need to Login token" });
         }
         const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        // console.log(decoded)
         const user = await User.findById(decoded.id).select("-password ");
         if(!user)
         {
             return res.status(401).json({ message: "User not found" });
         
         }
       //  console.log(user)
         req.user = user;
         
         next();
        
    } catch (error) {
        console.log(error);
    }
}