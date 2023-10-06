import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { RiskContextProvider } from './reducers/riskReducer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RiskContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </RiskContextProvider>
)
