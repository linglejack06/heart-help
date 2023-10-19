import { useState } from "react";
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
  const onChestPainChange = (pickedOption: string) => {
    const chestPainObject = {
      ...DEFAULT_CHEST_PAIN,
      [pickedOption]: true,
    };
    symptomsDispatch({ type: "chestPain", payload: chestPainObject });
  };
  return (
    <div
      className={`bg-red-100 text-red-700 font-bold text-lg align-baseline p-2 rounded-md border-red-700 border-2 w-full sm:w-1/3 lg:w-1/5 ${
        isShowing ? "rounded-xl" : ""
      }`}
    >
      <div>
        <input
          type="checkbox"
          checked={isShowing}
          name="showChestPain"
          id="showingChestPain"
          onChange={() => setIsShowing(!isShowing)}
          className="h-5 w-5 rounded-md bg-gray-500 text-red-700 my-auto mr-16 hover:ring-red-700 focus:ring-red-700"
        />
        <label htmlFor="showingChestPain">Chest Pain?</label>
      </div>
      {isShowing == true ? (
        <PickOne
          options={CHEST_PAIN_OPTIONS}
          groupName="Type of Pain"
          onPickChange={onChestPainChange}
          forChestPain={true}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChestPain;
