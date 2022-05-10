import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWorking from "./pages/AddWorking";
import CountingSalary from "./pages/CountingSalary";
import ManageSalary from "./pages/ManageSalary";
import SalaryReport from "./pages/SalaryReport";

function App() {
  return (
    <Routes>
      <Route path="/salary/manage" element={<ManageSalary />} />
      <Route path="/salary/counting" element={<CountingSalary />} />
      <Route path="/salary/report" element={<SalaryReport/>} />
      <Route path="/salary/working" element={<AddWorking/>} />
    </Routes>
  );
}

export default App;
