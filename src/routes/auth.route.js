 import { register,login ,logout } from "../controller/auth.controller.js";
 import { verifyJwt } from "../middleware/auth.middleware.js";
 import express from "express"

 const router = express.Router()

 router.post("/register", register)
 router.post("/login",login)
 router.post("/logout" , verifyJwt , logout )

 export default router 