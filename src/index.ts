import { app as server } from "@/configs/app";
import { connectDB } from "@/configs/database";
import { logger } from "./utils/logger";

const app = async () => {
  await connectDB();
  logger.info("Server started on port 3000");
  return server;
};

export default await app();
