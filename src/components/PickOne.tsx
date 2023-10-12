import { PickOneProps } from "../types";
import { useState } from "react";

const PickOne = ({ options, groupName }: PickOneProps) => {
  const [chosenOption, setChosenOption] = useState(options[0]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenOption(e.target.value);
  };
  return (
    <div>
      {options.map((option) => (
        <>
          <input
            type="radio"
            id={option}
            name={groupName}
            value={option}
            checked={chosenOption === option}
          />
          <label htmlFor={option}>{option}</label>
        </>
      ))}
    </div>
  );
};
