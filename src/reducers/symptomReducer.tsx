import { createContext, useReducer } from "react";
import { ChestPain, SymptomAction, Symptoms, ReactChildrenProps } from "../types";
import { noSymptoms } from "../calculator/testValues";
const symptomReducer = (state: Symptoms = noSymptoms, action: SymptomAction): Symptoms => {
  switch(action.type) {
    case "shortnessOfBreath":
      return {
        ...state,
        shortnessOfBreath: action.payload as boolean
      }
    case "nausea":
      return {
        ...state,
        nausea: action.payload as boolean,
      }
    case "sweating":
      return {
        ...state,
        sweating: action.payload as boolean
      }
    case "leftArmPain":
      return {
        ...state,
        leftArmPain: action.payload as boolean
      }
    case "jawPain":
      return {
        ...state,
        jawPain: action.payload as boolean
      }
    case "chestPain":
      return {
        ...state,
        chestPain: action.payload as ChestPain | null
      }
  }
}

const SymptomContext = createContext({});

export const SymptomContextProvider = (props: ReactChildrenProps) => {
  const [symptoms, symptomsDispatch] = useReducer(symptomReducer, noSymptoms);

  return (
    <SymptomContext.Provider value={[symptoms, symptomsDispatch]}>
      {props.children}
    </SymptomContext.Provider>
  )
}

export default SymptomContext