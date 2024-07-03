import response from "@/utils/response";
import { Hono } from "hono";
import auth from "./auth";
import users from "./user";

export const routes = new Hono();

// check health endpoint
routes.get("/health", async (c) => {
  return response(c, 200);
});

// users endpoint
routes.route("/users", users);
routes.route("/auth", auth);
