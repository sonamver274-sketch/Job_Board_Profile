  import express from "express"
  import cors from "cors"
  import cookieParser from "cookie-parser"
  import authRouter from "./routes/auth.route.js"
  import jobRouter from "./routes/job.route.js"
  import applicantRouter from "./routes/applicant.route.js"
   

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(cookieParser())





  // routes 
  app.use("/api/v1/auth", authRouter)
  app.use("/api/v1/jobs", jobRouter)
  app.use("/api/v1/applicant" ,applicantRouter)





export default app 

