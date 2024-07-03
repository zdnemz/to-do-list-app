import { bearerAuth } from "hono/bearer-auth";
import { getCookie } from "hono/cookie";

export const verify = bearerAuth({
  verifyToken: async (token, c) => {
    return token === getCookie(c, "token");
  },
});
