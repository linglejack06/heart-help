import { createContext, useReducer } from "react";
import { ActivityLevel, Diseases, Gender, ReactChildrenProps, RiskAction, Risks } from "../types";

const defaultRisk = {
  activity: ActivityLevel.Average,
  gender: Gender.NoResponse,
  diseases: {} as Diseases,
  age: 0,
}
const riskReducer = (state: Risks, action: RiskAction): Risks => {
  switch(action.type) {
    case "activity":
      return {
        ...state,
        activity: action.payload as ActivityLevel
      }
    case "diseases":
      return {
        ...state,
        diseases: action.payload as Diseases
      }
    case "gender":
      return {
        ...state,
        gender: action.payload as Gender
      }
    case "age":
      return {
        ...state,
        age: action.payload as number
      }
  }
}

const RiskContext = createContext({});

export const RiskContextProvider = ({ children }: ReactChildrenProps) => {
  const [risk, riskDispatch] = useReducer(riskReducer, defaultRisk);
  return (
    <RiskContext.Provider value={[risk, riskDispatch]}>
      {children}
    </RiskContext.Provider>
  )
}