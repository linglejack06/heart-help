import { ChestPain, Symptoms, Diseases } from "../types";

export const chestPain: ChestPain = {
  dull: true,
  sharp: false,
  pressure: false,
  stabbing: false,
};
export const chestPainWithoutFactors: ChestPain = {
  dull: false,
  sharp: true,
  pressure: false,
  stabbing: true,
};
export const symptomsWithoutChestPain: Symptoms = {
  shortnessOfBreath: true,
  nausea: true,
  sweating: false,
  leftArmPain: true,
  jawPain: false,
  chestPain: null,
};
export const symptomsWithoutChestPain2: Symptoms = {
  shortnessOfBreath: true,
  nausea: true,
  leftArmPain: true,
  jawPain: true,
  sweating: false,
  chestPain: null,
};
export const symptomsWithChestPain: Symptoms = {
  shortnessOfBreath: false,
  sweating: true,
  nausea: true,
  leftArmPain: true,
  jawPain: true,
  chestPain: chestPain,
};
export const allSymptoms: Symptoms = {
  shortnessOfBreath: true,
  sweating: true,
  nausea: true,
  leftArmPain: true,
  jawPain: true,
  chestPain: chestPain,
};
export const noSymptoms: Symptoms = {
  shortnessOfBreath: false,
  sweating: false,
  nausea: false,
  leftArmPain: false,
  jawPain: false,
  chestPain: null,
};
export const noDiseases: Diseases = {
  cad: false,
  pad: false,
  stroke: false,
  diabetes: false,
  hbp: false,
  smoking: false,
  ckd: false,
  historyOfCad: false,
  highCholesterol: false,
}; // returns 1;
export const someDiseases: Diseases = {
  cad: true,
  pad: false,
  stroke: true,
  diabetes: false,
  hbp: false,
  smoking: false,
  ckd: true,
  historyOfCad: false,
  highCholesterol: false,
}; // returns 2.15
export const someDiseases3: Diseases = {
  diabetes: true,
  ckd: true,
  hbp: true,
  cad: false,
  pad: false,
  smoking: false,
  stroke: false,
  historyOfCad: false,
  highCholesterol: false,
};
export const allDiseases: Diseases = {
  cad: true,
  pad: true,
  stroke: true,
  diabetes: true,
  hbp: true,
  smoking: true,
  ckd: true,
  historyOfCad: true,
  highCholesterol: true,
}; // returns 3.5;
export const someDiseases2: Diseases = {
  cad: false,
  pad: false,
  stroke: false,
  diabetes: true,
  hbp: true,
  smoking: true,
  ckd: false,
  historyOfCad: false,
  highCholesterol: false,
}; // returns 1.95
