import { Hono } from "hono";
import auth from "./auth";
import users from "./user";
import { HTTPException } from "hono/http-exception";
import response, { statusTexts } from "@/utils/response";
import { ZodError } from "zod";

export const api = new Hono();

// check health endpoint
api.get("/health", async (c) => {
  return response(c, 200);
});

// users endpoint
api.route("/users", users);
api.route("/auth", auth);

api.notFound((c) => {
  return response(c, 404, "Not Found");
})

// Error handler
api.onError((err, c) => {
  if (err instanceof ZodError) {
    return response(c, 400, err.issues.map((issue) => issue.message));
  }

  if (err instanceof HTTPException && statusTexts.hasOwnProperty(err.status)) {
    return response(c, err.status as keyof typeof statusTexts, err.message);
  }

  return response(c, 500);
});
