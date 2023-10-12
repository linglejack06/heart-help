import { PickOneProps } from "../types";
import { useState } from "react";

const PickOne = ({ options, groupName, onPickChange }: PickOneProps) => {
  const [chosenOption, setChosenOption] = useState(options[0]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenOption(e.target.value);
    onPickChange(e.target.value);
  };
  return (
    <div>
      <h3>{groupName}</h3>
      {options.map((option) => (
        <li key={option}>
          <input
            type="radio"
            id={option}
            name={groupName}
            value={option}
            checked={chosenOption === option}
            onChange={onChange}
          />
          <label htmlFor={option}>{option}</label>
        </li>
      ))}
    </div>
  );
};

export default PickOne;
