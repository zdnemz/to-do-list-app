import { MiddlewareHandler } from "hono";
import { verify } from "hono/jwt";
import { getCookie } from "hono/cookie";
import response from "@/utils/response";
import { Payload } from "@/types";

export const protect: MiddlewareHandler = async (c, next) => {
  const token = getCookie(c, "token");
  if (!token) {
    return response(c, 401);
  }

  const payload = (await verify(
    token,
    Bun.env.JWT_SECRET as string
  )) as Payload;

  if (!payload || payload.exp! < Date.now() / 1000) {
    return response(c, 401);
  }

  c.set("jwtPayload", payload);

  return await next();
};
