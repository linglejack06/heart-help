import { ActivityLevel, Diseases, Gender, Risks } from "../../types";

const ageCalc = (age: number): number => {
  // lower factor returning
  if (age < 25) {
    return 0.02;
  } else if (age < 45) {
    return 0.5;
  } else if (age < 65) {
    return 1.5;
  } else if (age < 80) {
    return 2;
  } else {
    return 2.25;
  }
};

const genderCalc = (gender: Gender): number => {
  switch (gender) {
    case "male":
      return 1.15;
    case "female":
      return 1.0;
    case "no response":
      return 1.0;
    default:
      return 1.0;
  }
};

const diseaseCalc = (diseases: Diseases): number => {
  let diseaseFactor: number = 1;
  if (diseases.cad === true) {
    diseaseFactor += 0.8;
  }
  if (diseases.pad === true) {
    diseaseFactor += 0.6;
  }
  if (diseases.stroke === true) {
    diseaseFactor += 0.6;
  }
  if (diseases.diabetes === true) {
    diseaseFactor += 0.5;
  } else if (diseases.hbp === true) {
    diseaseFactor += 0.3;
  }
  if (diseases.smoking === true) {
    diseaseFactor += 0.6;
  }
  if (diseases.ckd === true) {
    diseaseFactor += 0.4;
  }
  return diseaseFactor;
};
const activityCalc = (activity: ActivityLevel): number => {
  switch (activity) {
    case "very high":
      return 0.8;
    case "high":
      return 0.9;
    case "average":
      return 1.1;
    case "below average":
      return 1.3;
    default:
      return 1;
  }
};
const riskCalculator = (risks: Risks): number => {
  const ageRisk = ageCalc(risks.age);
  const genderRisk = genderCalc(risks.gender);
  const diseaseRisk = diseaseCalc(risks.diseases);
  const activityRisk = activityCalc(risks.activity);
  return ageRisk + genderRisk + diseaseRisk + activityRisk;
};
export default riskCalculator;
export { ageCalc, diseaseCalc, genderCalc, activityCalc };
