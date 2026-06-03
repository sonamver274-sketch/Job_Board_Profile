  import express from "express"
  import cors from "cors"
  import cookieParser from "cookie-parser"
  import authRouter from "./routes/auth.route.js"
  import jobRouter from "./routes/job.route.js"
  import applicantRouter from "./routes/applicant.route.js"
   

  const app = express()
  app.use(cors({
    origin: "*",
    credentials: true
  }))
  app.use(express.json())
  app.use(cookieParser())
  app.use("/health",(req,res)=>{res.send("ok")})




  // routes 
  app.use("/api/v1/auth", authRouter)
  app.use("/api/v1/jobs", jobRouter)
  app.use("/api/v1/applicant" ,applicantRouter)



  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({ success: false, message });
  });


export default app 

