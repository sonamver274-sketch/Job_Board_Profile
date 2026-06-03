 import userModel from "../models/user.model.js";
  import {asyncHandler} from "../utils/asynchandler.js"
 import jwt from "jsonwebtoken"
 import { ApiError } from "../utils/apierror.js";

const verifyJwt = asyncHandler (async(req,res,next)=>{
    const token = req.cookies.token
    if (!token) {
        throw new ApiError(401,"token not found")
    }
    const  decode = jwt.verify( token , process.env.JWT_SECRET)
    const user = await userModel.findById(decode._id)
    if (!user) {
         throw new ApiError(401,"user not found")
    }
    req.user = user 
    next()
})
export {
    verifyJwt
}