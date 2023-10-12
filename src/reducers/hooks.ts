import { useContext } from "react";
import SymptomContext from "./symptomReducer";

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

export { useSymptomDispatch, useSymptomValues };
