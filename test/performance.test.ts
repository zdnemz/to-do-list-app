import { performance } from "perf_hooks";
import { test, expect } from "bun:test";
import { app } from "@/configs/app";

const iterations = 1000;

const fetchApi = async () => {
  return await app.request("/api/health", { method: "GET" });
};

const testSpeed = async () => {
  const promises = [];

  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    promises.push(fetchApi());
  }

  await Promise.all(promises);

  const end = performance.now();
  return end - start;
};

test("API speed test", async () => {
  const duration = await testSpeed();
  console.log(
    `Total time for ${iterations} requests: ${duration.toFixed(2)} ms`
  );

  expect(duration).toBeLessThan(10000);
});
