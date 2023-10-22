import { Risks, Symptoms, RangeValues } from "../types";
import painCalculator from "./pain-calculator/pain-calculator";
import riskCalculator from "./risk-calculator/risk-calculator";

const DEFAULT_PERCENT = 4;

const calculatePercentage = (risks: Risks, symptoms: Symptoms): number => {
  let totalFactor = DEFAULT_PERCENT;
  totalFactor *= riskCalculator(risks);
  totalFactor *= painCalculator(symptoms);
  return totalFactor;
};

const convertToRange = (percentage: number): RangeValues => {
  if (percentage <= 33.3) {
    return RangeValues.LOW;
  } else if (percentage <= 66.6) {
    return RangeValues.MID;
  } else {
    return RangeValues.HIGH;
  }
};
export { calculatePercentage, convertToRange };
