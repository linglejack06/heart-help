import { ChestPain, Symptoms } from "../../types";

const painCalculator = (symptoms: Symptoms): number => {
  // lower factors
  let totalPainFactor = 1;
  if (symptoms.chestPain) {
    totalPainFactor += chestPainCalc(symptoms.chestPain);
  }
  if (symptoms.jawPain) {
    totalPainFactor += 0.3;
  }
  if (symptoms.leftArmPain) {
    totalPainFactor += 0.3;
  }
  if (symptoms.nausea) {
    totalPainFactor += 0.2;
  }
  if (symptoms.shortnessOfBreath) {
    totalPainFactor += 0.4;
  }
  if (symptoms.sweating) {
    totalPainFactor += 0.2;
  }
  return totalPainFactor > 1 ? totalPainFactor : 0.5;
};

const chestPainCalc = (chestPain: ChestPain): number => {
  if (chestPain.dull == true || chestPain.pressure == true) return 0.5;
  else return 0;
};

export default painCalculator;
export { chestPainCalc };
