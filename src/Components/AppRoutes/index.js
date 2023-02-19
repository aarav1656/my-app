import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/Previous";
import Dashboard from "../../Pages/Dashboard";
import Upcoming from "../../Pages/Upcoming";
import Previous from "../../Pages/Previous";
import Live from "../../Pages/Live";
import Admin from "../../Pages/Admin";
import ProfilePage from "../../Pages/Profile";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/upcoming" element={<Upcoming />}></Route>
      <Route path="/live" element={<Live />}></Route>
      <Route path="/previous" element={<Previous />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
