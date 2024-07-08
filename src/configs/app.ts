import { api } from "@/routes";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { secureHeaders } from "hono/secure-headers";
import { Variables } from "@/types";
import { web } from "@/web/routes";

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

// api endpoint
app.route("/api", api);

// web endpoint
app.route("/", web);
