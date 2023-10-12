import { useNavigate } from "react-router-dom";
import { useRiskDispatch } from "../../reducers/hooks";

function RiskForm() {
  const riskDispatch = useRiskDispatch();
  const navigate = useNavigate();
  const navigateToPainForm = () => navigate("/pain-calculation");
  return (
    <div>
      <h1>Risk Factors</h1>
    </div>
  );
}

export default RiskForm;
