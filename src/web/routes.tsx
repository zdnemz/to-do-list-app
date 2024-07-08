import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import Layout from "./layouts";
import Index from "./page/Index";

export const web = new Hono();

web.get("*", jsxRenderer(Layout, { stream: true }));

web.get("/", (c) => {
  return c.render(<Index />);
});

web.onError((err, c) => {
  console.error(err);
  return c.text("Internal Server Error", 500);
});

web.notFound((c) => {
  return c.render(<h1>404 Not Found</h1>);
});
