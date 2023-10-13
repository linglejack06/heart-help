import { Routes, Route } from "react-router-dom";
import PainForm from "./components/PainForm";
import RiskForm from "./components/RiskForm";
import Results from "./components/Results";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <h1></h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/risk-calculation" element={<RiskForm />} />
        <Route path="/pain-calculation" element={<PainForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
