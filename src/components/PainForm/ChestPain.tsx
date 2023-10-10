import { useState } from "react"
import Checkbox from "../Checkbox";
import { useSymptomDispatch } from "../../reducers/hooks";
import { ChestPainProps } from "../../types";


const ChestPainSelector = ({ onChange }: ChestPainProps) => {
  const [sharp, setSharp] = useState(false);
  const [dull, setDull] = useState(false);
  const [pressure, setPressure] = useState(false);
  const [stabbing, setStabbing] = useState(false);
  const onCheckChange = (name: "sharp"|"dull"|"pressure"|"stabbing", checked: boolean) => {
    switch(name) {
      case "sharp":
        return setSharp(checked);
      case "dull":
        return setDull(checked);
      case "pressure":
        return setPressure(checked);
      case "stabbing":
        return setStabbing(checked);
    }
  }
  return (
    <div>
      <Checkbox onChange={onCheckChange} name="sharp">
        Is the pain sharp?
      </Checkbox>
    </div>
  )
}
const ChestPain = () => {
  const [isShowing, setIsShowing] = useState(false);
  const symptomsDispatch = useSymptomDispatch();
  const onShowingChange = (name: string, showing: boolean) => {
    console.log(name);
    setIsShowing(showing);
  }
  const onChestPainChange = (sharp: boolean, dull: boolean, pressure: boolean, stabbing: boolean) => {
    const chestPainObject= {
      sharp,
      dull,
      pressure,
      stabbing,
    }
    symptomsDispatch({ type: "chestPain", payload: chestPainObject });
  }
  return (
    <div>
      <Checkbox onChange={onShowingChange} name="chestPain">
        Chest Pain?
      </Checkbox>
      {isShowing ? (

      ) : null}
    </div>
  )
}