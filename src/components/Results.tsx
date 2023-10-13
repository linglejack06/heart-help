import { useEffect, useState } from "react";
import { useRiskValues, useSymptomValues } from "../reducers/hooks";
import { calculatePercentage, convertToRange } from "../calculator";
import { RangeValues } from "../types";

const Results = () => {
  const symptoms = useSymptomValues();
  const risks = useRiskValues();
  const [range, setRange] = useState<null | RangeValues>(null);
  useEffect(() => {
    const percentage = calculatePercentage(risks, symptoms);
    setRange(convertToRange(percentage));
  }, [symptoms, risks]);
  return (
    <div>
      <h1>Your Results</h1>
      <h3>{range} Chance of Heart Attack Onset</h3>
      {/* <p>explanations call doctor etc...</p> */}
      {/* <p>disclaimers...</p> */}
    </div>
  );
};

export default Results;
