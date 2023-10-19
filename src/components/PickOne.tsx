import { PickOneProps } from "../types";
import { useState } from "react";

const PickOne = ({ options, groupName, onPickChange }: PickOneProps) => {
  const [chosenOption, setChosenOption] = useState(options[0]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenOption(e.target.value);
    onPickChange(e.target.value);
  };
  return (
    <div className="mt-4">
      <h3>{groupName}</h3>
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
  );
};

export default PickOne;
