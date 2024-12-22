import mongoose from "mongoose";

const connectDb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connection successFully");
  } catch (err) {
    console.log("connot connect db", err);
  }
};
export default connectDb;
