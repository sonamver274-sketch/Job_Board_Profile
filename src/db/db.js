import mongoose from "mongoose";

let isConnected = false;

const connectDb = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("mongoDb atlas connection successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
  }
};

export default connectDb;