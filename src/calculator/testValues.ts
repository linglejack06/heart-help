import { ChestPain, Symptoms, Diseases } from "../types"

export const chestPain: ChestPain = {
  dull: true,
  sharp: false,
  pressure: false,
  stabbing: false,
}
export const chestPainWithoutFactors: ChestPain = {
  dull: false,
  sharp: true,
  pressure: false,
  stabbing: true,
}
export const symptomsWithoutChestPain: Symptoms = {
  shortnessOfBreath: true,
  nausea: true,
  sweating: false,
  leftArmPain: true,
  jawPain: false,
  chestPain: null,
}
export const symptomsWithChestPain: Symptoms = {
  shortnessOfBreath: false,
  sweating: true,
  nausea: true,
  leftArmPain: true,
  jawPain: true,
  chestPain: chestPain,
}
export const noSymptoms: Symptoms = {
  shortnessOfBreath: false,
  sweating: false,
  nausea: false,
  leftArmPain: false,
  jawPain: false,
  chestPain: null
}
export const noDiseases: Diseases = {
  cad: false,
  pad: false,
  stroke: false,
  diabetes: false,
  hbp: false,
  smoking: false,
  ckd: false,
} // returns 1;
export const someDiseases: Diseases = {
  cad: true,
  pad: false,
  stroke: true,
  diabetes: false,
  hbp: false,
  smoking: false,
  ckd: true,
} // returns 2.15
export const allDiseases: Diseases = {
  cad: true,
  pad: true,
  stroke: true,
  diabetes: true,
  hbp: true,
  smoking: true,
  ckd: true,
} // returns 3.5;
export const someDiseases2: Diseases = {
  cad: false,
  pad: false,
  stroke: false,
  diabetes: true,
  hbp: true,
  smoking: true,
  ckd: false,
} // returns 1.95