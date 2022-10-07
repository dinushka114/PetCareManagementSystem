
import './App.css';
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import UserHome from './pages/user/servicesHome';
import ServiceHome from './pages/admin/PetServiceAdmin/service'
import AddService from './pages/admin/PetServiceAdmin/addServiceHome'
import Card from './components/user/Card/Card'
import MoreService from './pages/user/moreService'
import Report from './pages/admin/PetServiceAdmin/MainReport'
import UpdateServiceHome from './pages/admin/PetServiceAdmin/updateServiceHome';


import MainDashboard from "./pages/user/DashBoard/DashBoard";

import HomePage from "./pages/user/HomePage/HomePage";
import Login from "./pages/user/Login/Login";
import Register from "./pages/user/Register/Register";
import Dashboard from "./pages/petboarding/admin/Dashboard";
import AddNewBoarding from "./pages/petboarding/admin/AddNewBoarding";
import Reports from './pages/petboarding/admin/Reports';
import Update from './pages/petboarding/admin/UpdateBoarding';
import Client from './pages/petboarding/user/petBoardingPlaces';



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
      <Route path="/pet-services" element={<UserHome/>} />
        <Route path="/get-service" element={<ServiceHome/>} />
        <Route path="/add-service" element={<AddService/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/service/:id" element={<MoreService/>}></Route>
        <Route path="/reports" element={<Report/>}></Route>
        <Route path="/update-service/:id" element={<UpdateServiceHome/>}></Route>
    </Routes>

  );
}


export default App;

