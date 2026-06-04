 import{ asyncHandler} from "../utils/asynchandler.js"
 import { ApiError } from "../utils/apierror.js"
 import { ApiResponse } from "../utils/apiresponse.js"
 import applicantModel from "../models/applicant.model.js"

 const applyJob = asyncHandler(async(req , res)=>{
   const {id}=req.params 
   const applicant = req.user._id 
   const {coverLetter} = req.body || {}
   const jobApply = await applicantModel.findOne({job:id ,applicant: applicant})
   if (jobApply) {
    throw new ApiError(404 ,"applicant alredy applied")
   }
   const createApplicant = await applicantModel.create({
    job:id ,
    applicant:req.user._id,
    coverLatter:coverLetter 
   })
   return res
   .status(201)
   .json(
    new ApiResponse(201,createApplicant,"applicant apply job successfully")
   )
 })
 const getMyApplications = asyncHandler(async(req , res)=>{
    const myApplication = await applicantModel.find({applicant: req.user._id}).populate("job")
    if (myApplication.length ===0) {
       throw new ApiError(404 ,"applicant not found") 
    }
    return res
   .status(200)
   .json(
    new ApiResponse(200,myApplication,"applicant found successfully")
   )
 })
  const getJobApplications = asyncHandler(async(req , res)=>{
    const {id}=req.params 
    const jobApplication = await applicantModel.find({job:id}).populate("applicant", "-password")
    if ( jobApplication.length==0) {
        throw new ApiError(404,"no application find")
    }
    return res
   .status(200)
   .json(
    new ApiResponse(200,jobApplication,"job applicanion found successfully")
   )
 })
 
  const updateApplications = asyncHandler(async(req , res)=>{
    const {id}=req.params 
    const {status}= req.body 
    const jobUpdate = await applicantModel.findByIdAndUpdate(id , {
        $set:{
           status: status
        }
    } , {new:true})
    if (!jobUpdate) {
        throw new ApiError(404, "update is not done");
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200, jobUpdate, "jobApplicant update successfully")
    );

 })
  
 export{
    applyJob,
    getJobApplications,
    getMyApplications,
    updateApplications
 }
 