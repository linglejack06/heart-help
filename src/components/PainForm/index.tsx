import { useContext } from "react";
import RiskContext from "../../reducers/riskReducer";
import { useNavigate } from "react-router-dom";
import { ChestPain } from "../../types";

function PainForm () {
  const [symptoms, symptomsDispatch] = useContext(RiskContext)
  const navigate = useNavigate();
  const navigateToSubmissionPage = () => navigate("/results");
  const handleFormChange = (e) => {
    if (e.target.name != "chestPain") {
      symptomsDispatch({
        type: e.target.name,
        payload: e.target.value
      })
    } else {
      const chestPain: ChestPain = {
        dull: e.target.value == "dull" ? e.target.value : false,
        sharp: e.target.value == "sharp" ? e.target.value : false,
        pressure: e.target.value == "pressure" ? e.target.value : false,
        stabbing: e.target.value == "stabbing" ? e.target.value : false,
      }
      symptomsDispatch({
        type: "chestPain",
        payload: chestPain
      })
    }
  }
  return (
    <div>
      <h1>Pain</h1>
      <form onSubmit={navigateToSubmissionPage}>
      </form>
    </div>
  )
}

export default PainForm;