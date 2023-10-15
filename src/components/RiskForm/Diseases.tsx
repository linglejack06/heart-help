import { noDiseases } from "../../calculator/testValues";
import { useRiskDispatch } from "../../reducers/hooks";
import Checkbox from "../Checkbox";
import { useState } from "react";

const Diseases = () => {
  const [diseases, setDiseases] = useState(noDiseases);
  const riskDispatch = useRiskDispatch();
  const handleDiseaseChange = (name: string, checked: boolean) => {
    const diseaseObjectForDispatch = {
      ...diseases,
      [name]: checked,
    };
    setDiseases(diseaseObjectForDispatch);
    riskDispatch({ type: "diseases", payload: diseaseObjectForDispatch });
  };
  return (
    <div>
      <h3>Family History</h3>
      <Checkbox onChange={handleDiseaseChange} name="historyOfCad">
        Premature family history of Coronary Artery Disease (before 55 male;
        before 65 female)
      </Checkbox>
      <h3>Diseases</h3>
      <Checkbox onChange={handleDiseaseChange} name="cad">
        Coronary Artery Disease
      </Checkbox>
      <Checkbox onChange={handleDiseaseChange} name="pad">
        Peripheral Artery Disease
      </Checkbox>
      <Checkbox onChange={handleDiseaseChange} name="stroke">
        History of Stroke
      </Checkbox>
      <Checkbox onChange={handleDiseaseChange} name="diabetes">
        Diabetes
      </Checkbox>
      <Checkbox onChange={handleDiseaseChange} name="hbp">
        High Blood Pressure
      </Checkbox>
      <Checkbox onChange={handleDiseaseChange} name="highCholesterol">
        High Cholesterol
      </Checkbox>
      <Checkbox onChange={handleDiseaseChange} name="smoking">
        Chronic Smoking
      </Checkbox>
      <Checkbox onChange={handleDiseaseChange} name="ckd">
        Chronic Kidney Disease
      </Checkbox>
    </div>
  );
};

export default Diseases;
