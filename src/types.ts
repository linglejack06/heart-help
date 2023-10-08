export enum Gender {
  Male = "male",
  Female = "female",
  NoResponse = "no response"
}

export enum ActivityLevel {
  VeryHigh = "very high", // >60 minutes of exercise five days / week
  High = "high", // 45 minutes of exercise five days / week
  Average = "average", //  30 minutes of exercise (including walking etc) five days / week
  BelowAverage = "below average"  // sedentary lifestyle (couch potato)
}
export interface Diseases {
  cad: boolean;
  pad: boolean;
  stroke: boolean;
  diabetes: boolean;
  hbp: boolean;
  smoking: boolean;
  ckd: boolean;
}

export interface Symptoms {
  shortnessOfBreath: boolean;
  nausea: boolean;
  sweating: boolean;
  leftArmPain: boolean;
  jawPain: boolean;
  chestPain: ChestPain | null;
}
export interface ChestPain {
  sharp: boolean; // unlikely
  dull: boolean; // likely
  pressure: boolean; // likely
  stabbing: boolean; // unlikely
}
export interface Risks {
  activity: ActivityLevel,
  diseases: Diseases,
  gender: Gender,
  age: number,
}
export interface RiskAction {
  type: "activity"|"diseases"|"gender"|"age"|"reset",
  payload: Diseases|Gender|ActivityLevel|number
}
export interface SymptomAction {
  type: "shortnessOfBreath"|"nausea"|"sweating"|"leftArmPain"|"jawPain"|"chestPain"|"reset",
  payload: boolean|null|ChestPain
}
export interface ReactChildrenProps {
  children: React.ReactNode
}
export interface CheckboxProps {
  name: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: Function,
  children: React.ReactNode
}
export interface SymptomContextType {
  symptoms: Symptoms,
  dispatch: (action: SymptomAction) => void
}