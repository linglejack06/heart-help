import {test, expect} from "@jest/globals";
import { ageCalc, diseaseCalc, genderCalc } from "./risk-calculator";
import { Diseases, Gender } from "../../types";


const noDiseases: Diseases = {
  cad: false,
  pad: false,
  stroke: false,
  diabetes: false,
  hbp: false,
  smoking: false,
  ckd: false,
} // returns 1;
const someDiseases: Diseases = {
  cad: true,
  pad: false,
  stroke: true,
  diabetes: false,
  hbp: false,
  smoking: false,
  ckd: true,
} // returns 2.15
const allDiseases: Diseases = {
  cad: true,
  pad: true,
  stroke: true,
  diabetes: true,
  hbp: true,
  smoking: true,
  ckd: true,
} // returns 3.5;
const someDiseases2: Diseases = {
  cad: false,
  pad: false,
  stroke: false,
  diabetes: true,
  hbp: true,
  smoking: true,
  ckd: false,
} // returns 1.95
test("age risk is correctly calculated", () => {
  expect(ageCalc(15)).toBe(0.02);
  expect(ageCalc(27)).toBe(0.25);
  expect(ageCalc(50)).toBe(1);
  expect(ageCalc(67)).toBe(1.25);
  expect(ageCalc(102)).toBe(1.5);
});
test("gender risk is calculated", () => {
  expect(genderCalc(Gender.Male)).toBe(1.15);
  expect(genderCalc(Gender.Female)).toBe(1);
  expect(genderCalc(Gender.NoResponse)).toBe(1);
});
test("disease risk is calculated", () => {
  expect(diseaseCalc(noDiseases)).toBeCloseTo(1);
  expect(diseaseCalc(someDiseases)).toBeCloseTo(2.15);
  expect(diseaseCalc(someDiseases2)).toBeCloseTo(1.95);
  expect(diseaseCalc(allDiseases)).toBeCloseTo(3.5);
})