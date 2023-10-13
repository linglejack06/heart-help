import { CheckboxProps } from "../types";
import { useState } from "react";

const Checkbox = ({ onChange, name, children }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name, !checked);
    setChecked(!checked);
  };
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        type="checkbox"
        checked={checked}
        name={name}
        id={name}
        onChange={handleChange}
      />
    </>
  );
};

export default Checkbox;
