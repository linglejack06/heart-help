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

  const navigateToResults = () => navigate("/results");
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedAge = parseInt(e.target.value, 10);
    setAge(parsedAge);
    riskDispatch({ type: "age", payload: parsedAge });
  };
  const handleGenderChange = (pickedOption: string) => {
    console.log(pickedOption);
    riskDispatch({ type: "gender", payload: pickedOption as Gender });
  };
  const handleActivityChange = (pickedOption: string) => {
    riskDispatch({ type: "activity", payload: pickedOption as ActivityLevel });
  };

  return (
    <div className="flex flex-col justify-start flex-auto w-full items-center p-4">
      <h1 className="text-3xl font-extrabold mx-auto mt-4">Risk Factors</h1>
      <form
        onSubmit={navigateToResults}
        className="flex flex-col justify-between flex-auto items-center w-full"
      >
        <PickOne
          options={genderValues}
          groupName="Gender"
          onPickChange={handleGenderChange}
          forChestPain={false}
        />
        <div className="flex flex-row mt-4 items-center justify-center w-full">
          <label htmlFor="age" className="text-2xl font-bold mr-4">
            <h3>Age:</h3>
          </label>
          <input
            type="number"
            onChange={handleAgeChange}
            value={age}
            id="age"
            name="age"
            className="border-2 border-red-700 rounded-md bg-red-100 focus:ring-none focus:border-red-400 flex-auto max-w-lg"
          />
        </div>
        <Diseases />
        <PickOne
          options={activityValues}
          groupName="Activity Level"
          onPickChange={handleActivityChange}
          forChestPain={false}
        />
        <button
          type="submit"
          className="mx-auto bg-red-100 text-red-700 font-bold p-4 rounded-md hover:text-white hover:bg-red-700 hover:shadow-lg hover:cursor-pointer hover:p-6 transition-all hover:rounded-xl border-2 border-red-700 mt-4"
        >
          Calculate Risk of Heart Attack Onset
        </button>
      </form>
    </div>
  );
}

export default RiskForm;
