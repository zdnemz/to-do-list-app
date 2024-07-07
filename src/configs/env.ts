export default {
  JWT_SECRET: Bun.env.JWT_SECRET as string,
  MONGO_URI: Bun.env.MONGO_URI as string || "mongodb://localhost:27017",
};
