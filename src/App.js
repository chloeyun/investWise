import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  UNSAFE_RouteContext,
} from "react-router-dom";
import DividendTracker from "./components/DividendTracker";
import EconomicDashboard from "./components/EconomicDashboard";
import InvestmentAdvisor from "./components/InvestmentAdvisor";
import Home from "./components/Home.js";

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-blue-500 hover:text-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dividends"
                className="text-blue-500 hover:text-blue-700"
              >
                Dividend Tracker
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-blue-500 hover:text-blue-700"
              >
                Economics Dashboard
              </Link>
            </li>
            <li>
              <Link to="/advisor" className="text-blue-500 hover:text-blue-700">
                Investment Advisor
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dividends" element={<DividendTracker />} />
          <Route path="/dashboard" element={<EconomicDashboard />} />
          <Route path="/advisor" element={<InvestmentAdvisor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
