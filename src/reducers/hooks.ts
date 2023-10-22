import { useContext } from "react";
import SymptomContext from "./symptomReducer";
import RiskContext from "./riskReducer";

const useSymptomDispatch = () => {
  const symptomContext = useContext(SymptomContext);
  if (symptomContext == undefined) {
    throw new Error("Context must be used within provider");
  }
  return symptomContext.dispatch;
};

const useSymptomValues = () => {
  const symptomContext = useContext(SymptomContext);
  if (symptomContext == undefined) {
    throw new Error("Context must be used within provider");
  }
  return symptomContext.symptoms;
};

const useRiskDispatch = () => {
  const riskContext = useContext(RiskContext);
  if (riskContext == undefined) {
    throw new Error("Context must be used within provider");
  }
  return riskContext.dispatch;
};
const useRiskValues = () => {
  const riskContext = useContext(RiskContext);
  if (riskContext == undefined) {
    throw new Error("Context must be used within provider");
  }
  return riskContext.risks;
};

export { useSymptomDispatch, useSymptomValues, useRiskDispatch, useRiskValues };
