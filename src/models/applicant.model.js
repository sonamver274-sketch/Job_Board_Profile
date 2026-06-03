import mongoose , {Schema} from "mongoose";

 const applicantSchema = new Schema({
    job:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required:true

    },
    applicant:{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    status:{
        type:String,
        enum:['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    coverLatter:{
        type:String
    }
 } , {timestamps:true})

 export default mongoose.model("Applicantion" , applicantSchema)