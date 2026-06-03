 import { getJobApplications,getMyApplications,updateApplications,applyJob } from "../controller/applicant.controller.js";
 import express from "express"
 import { verifyJwt } from "../middleware/auth.middleware.js";

 const router = express.Router()
 
 router.post("/:id/apply" ,verifyJwt, applyJob)
 router.get("/my" ,verifyJwt , getMyApplications)
 router.get("/:id/applications" ,verifyJwt , getJobApplications)
 router.put("/:id/status" ,verifyJwt , updateApplications)

 export default router 