import { ActivityLevel, Risks, Symptoms, Gender } from "../types";
import painCalculator from "./pain-calculator/pain-calculator";
import riskCalculator from "./risk-calculator/risk-calculator";
import { someDiseases3, symptomsWithoutChestPain2 } from "./testValues";

const DEFAULT_PERCENT = 4;

const calculatePain = (risks: Risks, symptoms: Symptoms): number => {
  let totalFactor = DEFAULT_PERCENT;
  totalFactor *= riskCalculator(risks);
  totalFactor *= painCalculator(symptoms);
  return totalFactor;
}
const percentage = calculatePain(
  {
    diseases: someDiseases3,
    gender: Gender.Female,
    age: 68,
    activity: ActivityLevel.VeryHigh
  },
  symptomsWithoutChestPain2
)
export { percentage }
export default calculatePain;