
import { Routes, Route } from "react-router-dom"
import MainDashboard from "./pages/user/DashBoard/DashBoard";
import HomePage from "./pages/user/HomePage/HomePage";
import Login from "./pages/user/Login/Login";
import Register from "./pages/user/Register/Register";



function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<MainDashboard />} />
      <Route exact path='/pet-boarding' element={<Dashboard />} />
      <Route exact path='/add' element={<AddNewBoarding />} />
      <Route exact path='/report' element={<Reports />} />
      <Route exact path='/update/:id' element={<Update />} />
      <Route exact path='/boarding' element={<Client />} />
    </Routes>

  );
}


export default App;

