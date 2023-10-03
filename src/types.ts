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