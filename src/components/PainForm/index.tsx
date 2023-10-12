import { useNavigate } from "react-router-dom";
import { SymptomAction } from "../../types";
import Checkbox from "../Checkbox";
import { useSymptomDispatch } from "../../reducers/hooks";

function PainForm() {
  const symptomsDispatch = useSymptomDispatch();
  const navigate = useNavigate();
  const navigateToSubmissionPage = () => navigate("/results");
  const handleFormChange = (
    type: SymptomAction["type"],
    checked: boolean,
    chestPain: boolean = false
  ) => {
    if (!chestPain) {
      symptomsDispatch({
        type,
        payload: checked,
      });
    }
  };
  return (
    <div>
      <h1>Pain</h1>
      <form onSubmit={navigateToSubmissionPage}>
        <Checkbox onChange={handleFormChange} name="shortnessOfBreath">
          Shortness Of Breath?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="nausea">
          Nausea?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="sweating">
          Sweating?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="leftArmPain">
          Left Arm Pain?
        </Checkbox>
        <Checkbox onChange={handleFormChange} name="jawPain">
          Jaw Pain?
        </Checkbox>
      </form>
    </div>
  );
}

export default PainForm;
