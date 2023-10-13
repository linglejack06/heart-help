import { createContext, useReducer } from "react";
import {
  ActivityLevel,
  Diseases,
  Gender,
  ReactChildrenProps,
  RiskAction,
  Risks,
  RiskContextType,
} from "../types";

const defaultRisk = {
  activity: ActivityLevel.Average,
  gender: Gender.NoResponse,
  diseases: {
    cad: false,
    pad: false,
    stroke: false,
    diabetes: false,
    hbp: false,
    smoking: false,
    ckd: false,
  },
  age: 0,
};
const riskReducer = (state: Risks = defaultRisk, action: RiskAction): Risks => {
  switch (action.type) {
    case "activity":
      return {
        ...state,
        activity: action.payload as ActivityLevel,
      };
    case "diseases":
      return {
        ...state,
        diseases: action.payload as Diseases,
      };
    case "gender":
      return {
        ...state,
        gender: action.payload as Gender,
      };
    case "age":
      return {
        ...state,
        age: action.payload as number,
      };
    case "reset":
      return defaultRisk;
  }
};

const RiskContext = createContext<RiskContextType | undefined>(undefined);

export const RiskContextProvider = ({ children }: ReactChildrenProps) => {
  const [risks, dispatch] = useReducer(riskReducer, defaultRisk);
  return (
    <RiskContext.Provider value={{ risks, dispatch }}>
      {children}
    </RiskContext.Provider>
  );
};

export default RiskContext;
