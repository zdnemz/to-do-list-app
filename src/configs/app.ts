import { routes } from "@/routes";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { secureHeaders } from "hono/secure-headers";
import { HTTPException } from "hono/http-exception";
import response, { statusTexts } from "@/utils/response";
import { Variables } from "@/types";
import { ZodError } from "zod";

export const app = new Hono<{ Variables: Variables }>();

app.use("*", secureHeaders());

// cors
app.use(
  cors({
    origin: (Bun.env.CORS_ORIGIN as string) || "*",
    credentials: true,
  })
);

// csrf
app.use(
  csrf({
    origin: (Bun.env.CORS_ORIGIN as string) || "*",
  })
);

// main endpoint
app.route("/api", routes);

// Not found handler
app.notFound((c) => {
  return response(c, 404);
});

// Error handler
app.onError((err, c) => {
  if (err instanceof ZodError) {
    return response(c, 400, err.issues.map((issue) => issue.message));
  }

  if (err instanceof HTTPException && statusTexts.hasOwnProperty(err.status)) {
    return response(c, err.status as keyof typeof statusTexts, err.message);
  }

  return response(c, 500);
});
