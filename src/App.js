import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWorking from "./pages/AddWorking";
import CountingSalary from "./pages/CountingSalary";
import ManageSalary from "./pages/ManageSalary";
import SalaryReport from "./pages/SalaryReport";
import ChannellingWelcome from "./pages/ChannellingWelcome";

function App() {
  return (
    <Routes>
      <Route path="/salary/manage" element={<ManageSalary />} />
      <Route path="/salary/counting" element={<CountingSalary />} />
      <Route path="/salary/report" element={<SalaryReport/>} />
      <Route path="/salary/working" element={<AddWorking/>} />
      <Route path="/channelling/welcome" element={<ChannellingWelcome/>} />
    </Routes>
  );
}

export default App;
