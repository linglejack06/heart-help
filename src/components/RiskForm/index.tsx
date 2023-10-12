import { useNavigate } from "react-router-dom";
import { useRiskDispatch } from "../../reducers/hooks";
import Diseases from "./Diseases";
import { useState } from "react";
import { ActivityLevel, Gender } from "../../types";
import PickOne from "../PickOne";

function RiskForm() {
  const riskDispatch = useRiskDispatch();
  const [age, setAge] = useState(0);
  const genderValues = Object.values(Gender);
  const activityValues = Object.values(ActivityLevel);
  const navigate = useNavigate();

  const navigateToPainForm = () => navigate("/pain-calculation");
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedAge = parseInt(e.target.value, 10);
    setAge(parsedAge);
    riskDispatch({ type: "age", payload: parsedAge });
  };
  const handleGenderChange = (
    pickedOption: ActivityLevel | Gender | string
  ) => {
    if (typeof pickedOption == "string") {
      throw new Error("must accept gender value");
    }
    riskDispatch({ type: "gender", payload: pickedOption });
  };
  const handleActivityChange = (
    pickedOption: ActivityLevel | Gender | string
  ) => {
    if (typeof pickedOption == "string") {
      throw new Error("must accept activity value");
    }
    riskDispatch({ type: "activity", payload: pickedOption });
  };

  return (
    <div>
      <h1>Risk Factors</h1>
      <form onSubmit={navigateToPainForm}>
        <PickOne
          options={genderValues}
          groupName="Gender"
          onPickChange={handleGenderChange}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          onChange={handleAgeChange}
          value={age}
          id="age"
          name="age"
        />
        <Diseases />
        <PickOne
          options={activityValues}
          groupName="Activity Level"
          onPickChange={handleActivityChange}
        />
        <button type="submit">Add Risk Factors</button>
      </form>
    </div>
  );
}

export default RiskForm;
