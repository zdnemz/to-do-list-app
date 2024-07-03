import { describe, it, expect } from "bun:test";
import app from "@/index";

describe("health", () => {
  it("should return 200", async () => {
    const res = await app.request("/api/health", { method: "GET" });

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      success: true,
      status: 200,
      message: "OK",
    });
  });
});
