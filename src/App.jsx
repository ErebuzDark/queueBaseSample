import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { MyProvider } from "./utils/Context";

// Screens
import Services from "./page/Services";
import ScreenMonitoring from "./page/ScreenMonitoring";
import Header from "./components/Header";

// Tellers
import PayBillingTeller from "./page/TellerScreens/PaybillingTeller";
import ConsultationTeller from "./page/TellerScreens/ConsultationTeller";
import RepairTeller from "./page/TellerScreens/RepairTeller";
import InstallationTeller from "./page/TellerScreens/InstallationTeller";

function App() {
  return (
    <MyProvider>
      <Router>
        <div className="flex h-screen w-full bg-slate-100">
          <Header />
          <div className="ml-16 lg:ml-60 p-11 flex-1">
            <Routes>
              <Route path="/" element={<Services />} />
              <Route path="/monitor" element={<ScreenMonitoring />} />
              <Route path="/teller-1" element={<PayBillingTeller />} />
              <Route path="/teller-2" element={<ConsultationTeller />} />
              <Route path="/teller-3" element={<RepairTeller />} />
              <Route path="/teller-4" element={<InstallationTeller />} />
            </Routes>
          </div>
        </div>
      </Router>
    </MyProvider>
  );
}

export default App;
