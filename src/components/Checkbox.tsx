import { CheckboxProps } from "../types";
import { useState } from "react";

const Checkbox = ({ onChange, name, children }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, !checked);
    setChecked(!checked);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        name={name}
        id={name}
        onChange={handleChange}
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};

export default Checkbox;
