import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://xenoverse:160821733169@cluster0.zocjo.mongodb.net/food-delivery"
    )
    .then(() => console.log("MongoDB connected"));
};
