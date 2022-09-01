import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import AddService from './pages/admin/PetServiceAdmin/service';
import ViewService from './pages/admin/PetServiceAdmin/view-service';
import ServiceHome from './pages/admin/PetServiceAdmin/service'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServiceHome/>} />
        <Route path="/get-service" element={<ViewService/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
