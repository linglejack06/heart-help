import{ test, expect } from "@jest/globals";
import { Pain } from "../../types";

const painWithoutChestPain: Pain = {
  shortnessOfBreath: true,
  nausea: true,
  sweating: false,
  leftArmPain: true,
  jawPain: false,
  chestPain: null,
}
test("Chest pain calculates correctly", () => {

})

test("pain is calculated without chest pain", () => {
  expect(painCalc(painWithoutChestPain)).toBeDefined();
})