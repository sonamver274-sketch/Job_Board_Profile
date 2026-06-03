  import mongoose, { Schema } from "mongoose";

  const userSchema = new Schema ({
    name:{
        type: String, 
        required: true 
    },
    email:{
        type: String,
        required:true,
        unique: true,
        trim: true 
    
    },
    password:{
        type:String,
        required: true
        
    },
    role:{
         type: String,
         enum:["jobSeeker", "employer"]
         

    }

  } , {timestamps:true} )

  export default mongoose.model("User", userSchema,)