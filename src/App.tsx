import { Routes, Route } from "react-router-dom";
import PainForm from "./components/PainForm";
import RiskForm from "./components/RiskForm";
import Results from "./components/Results";
import Welcome from "./components/Welcome";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-w-screen min-h-screen text-red-700 bg-gray-200 flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/risk-calculation" element={<RiskForm />} />
        <Route path="/pain-calculation" element={<PainForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <footer className="p-2 mt-4">
        <p className="text-md font-bold">
          Disclaimer: <br />
          This app is intended for informational purposes only and should not be
          considered a substitute for professional medical advice, diagnosis, or
          treatment. It is not a medical device, and its predictions are based
          on general risk factors and statistics, which may not accurately
          reflect your individual health status. Always consult with a qualified
          healthcare provider or physician for a comprehensive assessment of
          your heart health. Your health is important, and decisions regarding
          your well-being should be made in consultation with a medical
          professional. The creators of this app disclaim any liability for
          decisions made based on the information provided within the app.
        </p>
      </footer>
    </div>
  );
}

export default App;
