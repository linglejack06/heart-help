import{ test, expect } from "@jest/globals";
import painCalculator, { chestPainCalc} from "./pain-calculator";
import { symptomsWithChestPain, symptomsWithoutChestPain, chestPain, chestPainWithoutFactors } from "../testValues";

test("Chest pain calculates correctly", () => {
  expect(chestPainCalc(chestPain)).toBe(0.5);
  expect(chestPainCalc(chestPainWithoutFactors)).toBe(0);
})

test("pain is calculated without chest pain", () => {
  expect(painCalculator(symptomsWithoutChestPain)).toBeDefined();
  expect(painCalculator(symptomsWithoutChestPain)).toBe(2.5);
})

test("pain is calculated with chest pain", () => {
  expect(painCalculator(symptomsWithChestPain)).toBe(3.5);
})