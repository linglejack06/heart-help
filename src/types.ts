export enum Gender {
  Male = "male",
  Female = "female",
  NoResponse = "no response",
}

export enum ActivityLevel {
  VeryHigh = "Very high (>60 minutes of exercise 5 or more days/week)", // >60 minutes of exercise five days / week
  High = "High (45-60 minutes of exercise 5 days/week)", // 45 minutes of exercise five days / week
  Average = "Average (30 minutes of moderate exercise 5 days/week)", //  30 minutes of exercise (including walking etc) five days / week
  BelowAverage = "Below Average (sedentary lifestyle)", // sedentary lifestyle (couch potato)
}
export interface Diseases {
  highCholesterol: boolean;
  historyOfCad: boolean;
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
  activity: ActivityLevel;
  diseases: Diseases;
  gender: Gender;
  age: number;
}
export interface RiskAction {
  type: "activity" | "diseases" | "gender" | "age" | "reset";
  payload: Diseases | Gender | ActivityLevel | number;
}
export interface SymptomAction {
  type:
    | "shortnessOfBreath"
    | "nausea"
    | "sweating"
    | "leftArmPain"
    | "jawPain"
    | "chestPain"
    | "reset";
  payload: boolean | null | ChestPain;
}
export interface ReactChildrenProps {
  children: React.ReactNode;
}
export interface CheckboxProps {
  name:
    | SymptomAction["type"]
    | "highCholesterol"
    | "historyOfCad"
    | "cad"
    | "pad"
    | "stroke"
    | "diabetes"
    | "hbp"
    | "smoking"
    | "ckd"
    | "sharp"
    | "dull"
    | "pressure"
    | "stabbing";
  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: Function;
  children: React.ReactNode;
}
export interface SymptomContextType {
  symptoms: Symptoms;
  dispatch: (action: SymptomAction) => void;
}
export interface RiskContextType {
  risks: Risks;
  dispatch: (action: RiskAction) => void;
}
export interface PickOneProps {
  options: string[];
  groupName: string;
  onPickChange: (pickedOption: string) => void;
}

export enum RangeValues {
  LOW = "Low",
  MID = "Moderate",
  HIGH = "High",
}
