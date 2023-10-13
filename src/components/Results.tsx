import { useEffect } from "react";
import { useRiskValues, useSymptomValues } from "../reducers/hooks";

function Results() {
  const symptoms = useSymptomValues();
  const risks = useRiskValues();
  useEffect(() => {
    console.log(symptoms);
    console.log(risks);
  }, [symptoms, risks]);
  return (
    <div>
      <h1>Your Results</h1>
      <p></p>
    </div>
  );
}

export default Results;
