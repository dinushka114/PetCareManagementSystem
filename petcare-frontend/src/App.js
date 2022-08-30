import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import AddService from './pages/admin/PetServiceAdmin/service';
import ViewService from './pages/admin/PetServiceAdmin/view-service';
import ServiceHome from './pages/user/servicesHome'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServiceHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
