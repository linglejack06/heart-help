import { useState } from "react"
import Checkbox from "../Checkbox";
import { useSymptomDispatch } from "../../reducers/hooks";
import { ChestPainProps } from "../../types";


const ChestPainSelector = ({ onChange }: ChestPainProps) => {
  return (
    <div>
      
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