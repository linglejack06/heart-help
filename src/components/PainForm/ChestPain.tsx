import { useState } from "react";
import Checkbox from "../Checkbox";
import { useSymptomDispatch } from "../../reducers/hooks";
import PickOne from "../PickOne";

const CHEST_PAIN_OPTIONS = ["sharp", "dull", "pressure", "stabbing"];
const DEFAULT_CHEST_PAIN = {
  sharp: false,
  dull: false,
  pressure: false,
  stabbing: false,
};

const ChestPain = () => {
  const [isShowing, setIsShowing] = useState(false);
  const symptomsDispatch = useSymptomDispatch();
  const onShowingChange = (name: string, showing: boolean) => {
    console.log(name);
    setIsShowing(!showing);
  };
  const onChestPainChange = (pickedOption: string) => {
    const chestPainObject = {
      ...DEFAULT_CHEST_PAIN,
      [pickedOption]: true,
    };
    symptomsDispatch({ type: "chestPain", payload: chestPainObject });
  };
  return (
    <div>
      <Checkbox onChange={onShowingChange} name="chestPain">
        Chest Pain?
      </Checkbox>
      {isShowing == true ? (
        <PickOne
          options={CHEST_PAIN_OPTIONS}
          groupName="Type of Pain"
          onPickChange={onChestPainChange}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChestPain;
