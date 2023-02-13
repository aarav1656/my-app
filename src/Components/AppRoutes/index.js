import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Previous";
import Dashboard from "../../Pages/Dashboard";
import Upcoming from "../../Pages/Upcoming";
import Previous from "../../Pages/Previous";
import Live from "../../Pages/Live";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/upcoming" element={<Upcoming />}></Route>
      <Route path="/live" element={<Live />}></Route>
      <Route path="/previous" element={<Previous />}></Route>
    </Routes>
  );
}
export default AppRoutes;
