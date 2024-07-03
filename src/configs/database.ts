import { logger } from "@/utils/logger";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }

    await mongoose.connect(Bun.env.MONGO_URI as string, {
      dbName: "to-do-list",
    });
    logger.info("Database connected");
  } catch (error) {
    logger.error((error as Error).message);
  }
};
