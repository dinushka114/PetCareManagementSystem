import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import Home from './pages/Home/home';
import Service from './pages/Service/service';
import AddService from './pages/Service/add-service';
import ServiceHome from './pages/Home/home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addService" element={<AddService/>} />
        <Route path="/Service" element={<Service/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
