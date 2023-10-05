import { ActivityLevel, Diseases, Gender, Risks } from "../../types"

const ageCalc = (age: number): number => {
  if(age < 25) {
    return 0.02;
  } else if (age < 45) {
    return 0.25;
  } else if (age < 65) {
    return 1.00;
  } else if (age < 80) {
    return 1.25;
  } else {
    return 1.5;
  }
};

const genderCalc = (gender: Gender): number => {
  switch(gender) {
    case "male":
      return 1.15;
    case "female":
      return 1.0;
    case "no response":
      return 1.0;
    default:
      return 1.0;
  }
}

const diseaseCalc = (diseases: Diseases): number => {
  let diseaseFactor: number = 1;
  if (diseases.cad === true) {
    diseaseFactor += 0.5;
  }
  if (diseases.pad === true) {
    diseaseFactor += 0.4;
  }
  if (diseases.stroke === true) {
    diseaseFactor += 0.45;
  }
  if (diseases.diabetes === true) {
    diseaseFactor += 0.35;
  } else if (diseases.hbp === true) {
    diseaseFactor += 0.1;
  }
  if (diseases.smoking === true) {
    diseaseFactor += 0.6;
  }
  if (diseases.ckd === true) {
    diseaseFactor += 0.2;
  }
  return diseaseFactor;
}
const activityCalc = (activity: ActivityLevel): number => {
  switch(activity) {
    case "very high":
      return 0.4;
    case "high":
      return 0.7;
    case "average":
      return 1;
    case "below average":
      return 1.15;
    default:
      return 1;
  }
}
const riskCalculator = (risks: Risks): number => {
  const ageRisk = ageCalc(risks.age);
  const genderRisk = genderCalc(risks.gender);
  const diseaseRisk = diseaseCalc(risks.diseases);
  const activityRisk = activityCalc(risks.activity);
  return ageRisk + genderRisk + diseaseRisk + activityRisk;
};
export default riskCalculator;
export { ageCalc, diseaseCalc, genderCalc, activityCalc };