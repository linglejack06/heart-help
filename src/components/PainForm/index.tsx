import { useNavigate } from "react-router-dom";
import { SymptomAction } from "../../types";
import Checkbox from "../Checkbox";
import { useSymptomDispatch } from "../../reducers/hooks";
import ChestPain from "./ChestPain";

function PainForm() {
  const symptomsDispatch = useSymptomDispatch();
  const navigate = useNavigate();
  const navigateToRiskPage = () => navigate("/risk-calculation");
  const handleFormChange = (type: SymptomAction["type"], checked: boolean) => {
    console.log(type, checked);
    symptomsDispatch({ type, payload: checked });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigateToRiskPage();
  };
  return (
    <div className="flex flex-col justify-start flex-auto w-full items-center">
      <h1 className="mb-8 text-3xl font-extrabold mx-auto mt-4">Pain</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between flex-auto items-center w-full"
      >
        <ChestPain />
        <Checkbox onChange={handleFormChange} name="leftArmPain">
          Left Arm Pain?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="jawPain">
          Jaw Pain?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="shortnessOfBreath">
          Shortness Of Breath?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="nausea">
          Nausea?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="sweating">
          Sweating?
        </Checkbox>
        <button
          type="submit"
          className="mx-auto bg-red-100 text-red-700 font-bold p-4 rounded-md hover:text-white hover:bg-red-700 hover:shadow-lg hover:cursor-pointer hover:p-6 transition-all hover:rounded-xl border-2 border-red-700 mt-4"
        >
          Submit Pain
        </button>
      </form>
    </div>
  );
}

export default PainForm;
