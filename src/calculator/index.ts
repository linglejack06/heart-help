import { ActivityLevel, Risks, Symptoms, Gender } from "../types";
import painCalculator from "./pain-calculator/pain-calculator";
import riskCalculator from "./risk-calculator/risk-calculator";
import { allDiseases, symptomsWithChestPain } from "./testValues";

const DEFAULT_PERCENT = 4;

const calculatePain = (risks: Risks, symptoms: Symptoms): number => {
  let totalFactor = DEFAULT_PERCENT;
  totalFactor *= riskCalculator(risks);
  totalFactor *= painCalculator(symptoms);
  return totalFactor;
}
const percentage = calculatePain(
  {
    diseases: allDiseases,
    gender: Gender.Male,
    age: 19,
    activity: ActivityLevel.VeryHigh
  },
  symptomsWithChestPain
)
export { percentage }
export default calculatePain;