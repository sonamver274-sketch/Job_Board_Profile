import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/apierror.js";
import { ApiResponse } from "../utils/apiresponse.js";
import jobModel from "../models/job.model.js";

const createJob = asyncHandler(async (req, res) => {
  const { title, description, salery, jobType, company, location } = req.body;
  if (!title || !description || !company || !location) {
    throw new ApiError(400, "details must required");
  }
  const job = await jobModel.create({
    title,
    company,
    salery,
    description,
    location,
    jobType,
    employer: req.user._id,
  });
  return res.status(201).json(new ApiResponse(201, job, "job created success"));
});

const getAllJobs = asyncHandler(async (req, res) => {
  const job = await jobModel.find({});
  if (!job.length) {
    throw new ApiError(404, "no job found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, job, "all job get successfully"));
});
const getJobById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const job = await jobModel.findById(id);
  if (!job) {
    throw new ApiError(404, "job not found");
  }
  return res.status(200).json(new ApiResponse(200, job, "job found success"));
});

const updateJob = asyncHandler(async(req,res)=>{
    const {title , salery , description , jobType , company , location}=req.body
    const {id}=req.params 

    const update = await jobModel.findByIdAndUpdate(id , {
        $set:{
            title ,
            description ,
            salery ,
            jobType ,
            company ,
            location 
        }
    } , {new:true})
     if (!update) {
        throw new ApiError(404, "update is not done");
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200, update , "job update successfully")
    );
})

const deleteJob = asyncHandler(async(req,res)=>{
    const {id}=req.params 
    const jobDelete = await jobModel.findByIdAndDelete(id) 
    if (!jobDelete) {
        throw new ApiError(404, "job not found");
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200,{} , "job delete successfully")
    );
})

export {
    getAllJobs,
    getJobById ,
    updateJob,
    deleteJob,
    createJob
}