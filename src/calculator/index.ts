import { ActivityLevel, Risks, Symptoms, Gender } from "../types";
import painCalculator from "./pain-calculator/pain-calculator";
import riskCalculator from "./risk-calculator/risk-calculator";
import { someDiseases, symptomsWithChestPain } from "./testValues";

const DEFAULT_PERCENT = 4;

const calculatePain = (risks: Risks, symptoms: Symptoms): number => {
  let totalFactor = DEFAULT_PERCENT;
  totalFactor *= riskCalculator(risks);
  totalFactor *= painCalculator(symptoms);
  return totalFactor;
}
const percentage = calculatePain(
  {
    diseases: someDiseases,
    gender: Gender.Male,
    age: 19,
    activity: ActivityLevel.BelowAverage
  },
  symptomsWithChestPain
)
export { percentage }
export default calculatePain;