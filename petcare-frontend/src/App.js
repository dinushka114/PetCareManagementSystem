import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import UserHome from './pages/user/servicesHome';
import ServiceHome from './pages/admin/PetServiceAdmin/service'
import AddService from './pages/admin/PetServiceAdmin/addServiceHome'
import Card from './components/user/Card/Card'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome/>} />
        <Route path="/get-service" element={<ServiceHome/>} />
        <Route path="/add-service" element={<AddService/>} />
        <Route path="/card" element={<Card/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
