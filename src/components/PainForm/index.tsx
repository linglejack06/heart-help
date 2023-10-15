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
    <div>
      <h1>Pain</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit Pain</button>
      </form>
    </div>
  );
}

export default PainForm;
