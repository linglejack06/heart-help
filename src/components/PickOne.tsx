import { PickOneProps } from "../types";
import { useState } from "react";

const PickOne = ({
  options,
  groupName,
  onPickChange,
  forChestPain,
}: PickOneProps) => {
  const [chosenOption, setChosenOption] = useState(options[0]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenOption(e.target.value);
    onPickChange(e.target.value);
  };
  return (
    <div
      className={`w-full flex flex-col ${
        forChestPain ? "align-baseline" : "items-center"
      } mt-4`}
    >
      <h3 className={`${forChestPain ? "" : "text-2xl font-bold mb-2"}`}>
        {groupName}
      </h3>
      <div
        className={`${
          forChestPain
            ? ""
            : "bg-red-100 text-red-700 font-bold text-lg items-center p-2 rounded-md border-red-700 border-2 w-full sm:w-1/3 lg:w-1/5"
        }`}
      >
        {options.map((option) => (
          <li key={option} className="list-none">
            <input
              type="radio"
              id={option}
              name={groupName}
              value={option}
              checked={chosenOption === option}
              onChange={onChange}
              className="mr-2 h-4 w-4 rounded-xl bg-gray-500 text-red-700 my-auto hover:ring-red-700 focus:ring-red-700"
            />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </div>
    </div>
  );
};

export default PickOne;
