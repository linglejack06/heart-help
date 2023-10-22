import { useEffect, useState } from "react";
import { useRiskValues, useSymptomValues } from "../reducers/hooks";
import { calculatePercentage, convertToRange } from "../calculator";
import { RangeValues } from "../types";

const Results = () => {
  const symptoms = useSymptomValues();
  const risks = useRiskValues();
  let information = "";
  let label = "";
  let emoji = "";
  const [range, setRange] = useState<null | RangeValues>(null);
  useEffect(() => {
    const percentage = calculatePercentage(risks, symptoms);
    setRange(convertToRange(percentage));
  }, [symptoms, risks]);
  if (!range) {
    return <div>Calculating</div>;
  } else if (range == RangeValues.LOW) {
    information =
      "Your likelihood of experiencing a heart attack is very low; nonetheless, it is essential to emphasize that this app is not a medically authorized diagnostic tool. We strongly encourage you to seek the advice of a medical professional or, if you experience symptoms consistent with a heart attack, to promptly call 911 for immediate medical attention. ";
    label = "happy";
    emoji = "😁";
  } else if (range == RangeValues.MID) {
    information =
      "In light of a moderate risk of potential heart attack onset, we recommend that you promptly contact your primary healthcare provider for a comprehensive assessment or proceed to the Emergency Room for further evaluation.";
    label = "semi-sad";
    emoji = "😕";
  } else if (range == RangeValues.HIGH) {
    information =
      "A heightened probability of experiencing a heart attack should be regarded as a crucial indicator. We strongly advise that you promptly contact your primary healthcare provider for thorough evaluation and guidance, or, in the event of a deteriorating medical condition, dial 911 for immediate emergency medical assistance.";
    label = "sad";
    emoji = "😟";
  }
  return (
    <div className="flex flex-col w-full justify-start items-center mb-20 p-4">
      <h1 className="text-3xl font-extrabold mb-2">
        Your Results &emsp;
        <span role="img" aria-label={label}>
          {emoji}
        </span>
      </h1>
      <h3 className="text-2xl font-bold mb-2">
        {range} Chance of Heart Attack Onset
      </h3>
      <p className="text-lg font-bold">{information}</p>
      {range == RangeValues.HIGH ? (
        <button
          onClick={() => window.open("tel:911")}
          className="mx-auto bg-red-700 text-white font-bold p-4 rounded-md hover:text-white hover:bg-red-700 hover:shadow-lg hover:cursor-pointer hover:p-6 transition-all hover:rounded-xl border-2 border-red-700 mt-4"
        >
          Contact Emergency Services
        </button>
      ) : null}
      <br />
    </div>
  );
};

export default Results;
