import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  await mongoose.connect(Bun.env.MONGO_URI as string);
};
