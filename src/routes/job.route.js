 import { getAllJobs ,getJobById , updateJob,createJob ,deleteJob } from "../controller/job.controller.js";
 import express from "express"
import { verifyJwt } from "../middleware/auth.middleware.js";
 

  const router = express.Router()

  router.get("/" , getAllJobs)
  router.post("/" ,verifyJwt , createJob)
  router.get("/:id" , getJobById)
  router.put("/:id" , verifyJwt ,  updateJob)
  router.delete("/:id" ,verifyJwt , deleteJob)

  export default router