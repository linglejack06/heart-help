import { useEffect } from "react";
import { useSymptomValues } from "../reducers/hooks";

function Results() {
  const symptoms = useSymptomValues();
  useEffect(() => {
    console.log(symptoms);
  }, [symptoms]);
  return (
    <div>
      <h1>Your Results</h1>
      <p></p>
    </div>
  );
}

export default Results;
