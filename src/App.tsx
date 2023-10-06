import { Routes, Route } from "react-router-dom"
import { percentage } from "./calculator"
import PainForm from "./components/PainForm"
import RiskForm from "./components/RiskForm"
import Results from "./components/Results"
import Welcome from "./components/Welcome"

function App() {
  return (
    <div>
      <h1>
        {Math.round(percentage)}% Chance of Myocardial Infraction Onset
      </h1>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/risk-calculation" element={<RiskForm />} />
        <Route path="/pain-calculation" element={<PainForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  )
}

export default App
