 import{ asyncHandler} from "../utils/asynchandler.js"
 import { ApiError } from "../utils/apierror.js"
 import { ApiResponse } from "../utils/apiresponse.js"
 import userModel from "../models/user.model.js"
 import bcrypt from "bcryptjs"
 import jwt from "jsonwebtoken"


 const register = asyncHandler (async(req,res)=>{
   const {name,email,password , role}= req.body
   if (!email || !password) {
       throw new ApiError ( 400 , "user email password required")
   }
    const existingUser = await userModel.findOne({email})
   if ( existingUser) {
    throw new ApiError ( 400 , "user alredy exixsted")
   }
   const hashedPassword = await bcrypt.hash(password,8)
    const newUser = await userModel.create( 
      { name,
      email,
      password:hashedPassword,
      role}
    )
    return res
    .status(201)
    .json(
        new ApiResponse (201 , newUser , "user succesfully registered ")
    )

})

 const login = asyncHandler (async(req,res)=>{
    const {email , password}= req.body 

    const user = await userModel.findOne({email})
    if (!user) {
         throw new ApiError ( 400 , "user not exixsted")
    }
    const correctPassword = await bcrypt.compare(password , user.password)
     if (!correctPassword) {
         throw new ApiError ( 400 , "invalid password")
    }

     const token = jwt.sign(
      { _id: user._id,  role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
  )
  return res
    .status(200)
    .cookie("token", token, { httpOnly: true })
    .json(
        new ApiResponse (200 ,{ user , token } , "user succesfully login")
    )
 })
 
 const logout = asyncHandler (async(req,res)=>{
   

    return res
    .status(200)
    .clearCookie("token")
    .json(
        new ApiResponse(
            200,
            {}, 
            "user successfully logout"
        )
    )
 })
 
 const forgotPassword = asyncHandler (async(req,res)=>{
    
 })
 
 export  {
    register,
    login,
    logout,
    forgotPassword
 }