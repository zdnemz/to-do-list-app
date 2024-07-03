import { app } from "@/configs/app";
import { connectDB } from "@/configs/database";
import { logger } from "./utils/logger";

const listen = async () => {
  await connectDB();
  logger.info("Server started on port 3000");
  return app;
};

export default await listen();
