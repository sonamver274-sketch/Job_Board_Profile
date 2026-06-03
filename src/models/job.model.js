import mongoose ,{Schema} from "mongoose";

const jobSchema = new Schema(
    {
        title:{
            type: String ,
            required: true , 
        },
        description:{
            type: String ,
            required: true,

        },
        company:{
            type: String ,
            required: true,

        },
        location:{
            type: String ,
            required: true,
            
        },
        jobType:{
            type:String ,
            enum:['full-time', 'part-time', 'remote', 'internship']
        },
        salery:{
            type:Number,

        },
        employer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    } ,{timestamps:true}
)
export default mongoose.model("Job",jobSchema)