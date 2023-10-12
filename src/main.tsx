import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { RiskContextProvider } from "./reducers/riskReducer.tsx";
import { SymptomContextProvider } from "./reducers/symptomReducer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RiskContextProvider>
    <SymptomContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </SymptomContextProvider>
  </RiskContextProvider>
);
