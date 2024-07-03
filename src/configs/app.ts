import { routes } from "@/routes";
import { Hono } from "hono";
import { secureHeaders } from "hono/secure-headers";
import { HTTPException } from "hono/http-exception";
import response, { statusTexts } from "@/utils/response";

export const app = new Hono();

app.use("*", secureHeaders());

// main endpoint
app.route("/api", routes);

// Not found handler
app.notFound((c) => {
  return response(c, 404);
});

// Error handler
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return response(c, err.status as keyof typeof statusTexts, err.message);
  }
  return response(c, 500);
});
