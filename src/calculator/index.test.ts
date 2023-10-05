import { describe, test, expect } from "@jest/globals";
import calculatePain from "./index.ts";

describe("Pain calculations with healthy 19 year old male", () => {
  test("with diseases", () => {
    expect(calculatePain({}, {})).toBeDefined();
  })
})