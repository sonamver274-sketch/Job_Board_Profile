 import mongoose from "mongoose";


 const connectDb = async ()=>{
  try {
    console.log(process.env.MONGODB_URI)

    const mongoDb = await mongoose.connect(process.env.MONGODB_URI)
    if (mongoDb) {
        console.log("mongoDb atlas connection successfully");

    }
  } catch (error) {
   console.log("MongoDB connection failed:", error.message)
  process.exit(1)


  }
 }

 export default connectDb