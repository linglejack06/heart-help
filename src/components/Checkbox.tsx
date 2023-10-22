import { CheckboxProps } from "../types";
import { useState } from "react";

const Checkbox = ({ onChange, name, children }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, !checked);
    setChecked(!checked);
  };
  return (
    <div className="bg-red-100 text-red-700 font-bold text-lg align-baseline p-2 rounded-md border-red-700 border-2 mt-4 w-full sm:w-1/3 lg:w-1/5">
      <input
        type="checkbox"
        checked={checked}
        name={name}
        id={name}
        onChange={handleChange}
        className="h-5 w-5 rounded-md bg-gray-500 text-red-700 my-auto mr-16 hover:ring-red-700 focus:ring-red-700"
      />
      <label htmlFor={name} className="mx-auto">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
