import { Handler } from "hono";

export const register: Handler = async (c, next) => {
  const body = await c.req.json();
};

export const getMe: Handler = async (c, next) => {
  const body = await c.req.json();
};

export const update: Handler = async (c, next) => {
  const body = await c.req.json();
};
