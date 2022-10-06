import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import UserHome from './pages/user/servicesHome';
import ServiceHome from './pages/admin/PetServiceAdmin/service'
import AddService from './pages/admin/PetServiceAdmin/addServiceHome'
import Card from './components/user/Card/Card'
import MoreService from './pages/user/moreService'
import Report from './pages/admin/PetServiceAdmin/MainReport'
import UpdateServiceHome from './pages/admin/PetServiceAdmin/updateServiceHome';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome/>} />
        <Route path="/get-service" element={<ServiceHome/>} />
        <Route path="/add-service" element={<AddService/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/:id" element={<MoreService/>}></Route>
        <Route path="/reports" element={<Report/>}></Route>
        <Route path="/update-service/:id" element={<UpdateServiceHome/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
