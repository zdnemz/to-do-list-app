import { describe, it, expect } from "bun:test";
import { v4 as uuid } from "uuid";
import app from "@/index";

describe("register", () => {
  it("should return 200 if request body is valid", async () => {
    const res = await app.request("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "test",
        email: `${uuid()}@test.com`,
        password: "Password123!",
      }),
    });

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({
      success: true,
      status: 200,
      message: "OK",
    });
  });

  it("should return 400 if request body is empty", async () => {
    const res = await app.request("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      success: false,
      status: 400,
      message: "Bad Request",
      data: "name is required",
    });
  });

  it("should return 400 if request body is invalid", async () => {
    const res = await app.request("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "test",
        email: `${uuid()}@test.com`,
      }),
    });

    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({
      success: false,
      status: 400,
      message: "Bad Request",
      data: "name is required",
    });
  });
});
