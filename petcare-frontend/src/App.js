
import './App.css';
import { BrowserRouter, Route, Routes , Link } from "react-router-dom";
import UserHome from './pages/user/servicesHome';
import ServiceHome from './pages/admin/PetServiceAdmin/service'
import AddService from './pages/admin/PetServiceAdmin/addServiceHome'
import Card from './components/user/Card/Card'
import MoreService from './pages/user/moreService'
import PetServiceReport from './pages/admin/PetServiceAdmin/MainReport'
import UpdateServiceHome from './pages/admin/PetServiceAdmin/updateServiceHome';


import MainDashboard from "./pages/user/DashBoard/DashBoard";
import HomePage from "./pages/user/HomePage/HomePage";
import Login from "./pages/user/Login/Login";
import Register from "./pages/user/Register/Register";
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails.js';
import Dashboard from './component/admin/Dashboard.js';
import ProductList from './component/admin/ProductList';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import Cart from "./component/Cart/Cart.js";
<<<<<<< Updated upstream
import Report from './component/admin/Report.js';

=======
import ProductReport from './component/admin/Report.js';
import AddNewBoarding from './pages/petboarding/admin/UpdateBoarding';
import Dashboard from './component/admin/Dashboard'

import Adminproductdetails from './component/admin/Adminproductdetails.js';



function App() {
>>>>>>> Stashed changes

import InsertBoardingPlaces from './components/petboarding/admin/insert';
import Client from './pages/petboarding/user/petBoardingPlaces';
import UpdateBoardingPlaces from './components/petboarding/admin/update'
import petBoardingPlaces from './components/petboarding/admin/home'



function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<MainDashboard />} />
      <Route exact path='/pet-boarding' element={<Dashboard />} />
      <Route exact path='/add' element={<InsertBoardingPlaces />} />
      <Route exact path='/report' element={<Reports />} />
      <Route exact path='/update/:id' element={<UpdateBoardingPlaces />} />
      <Route exact path='/boarding' element={<petBoardingPlaces />} />
      <Route path="/pet-services" element={<UserHome/>} />
        <Route path="/get-service" element={<ServiceHome/>} />
        <Route path="/add-service" element={<AddService/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/:id" element={<MoreService/>}></Route>
        <Route path="/reports" element={<PetServiceReport/>}></Route>
        <Route path="/update-service/:id" element={<UpdateServiceHome/>}></Route>
        
        <Route path='/:id' element={<ProductDetails />}></Route>
        <Route path='/admin/dashboard' element={<Dashboard />}></Route>
        <Route path="/admin/all-products" element={<ProductList />}></Route>
        <Route path="/admin/add-product" element={<NewProduct />}></Route>
        <Route path="/admin/update-product/:id" element={<UpdateProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
<<<<<<< Updated upstream
        <Route path="/admin/report" element={<Report />}></Route>
        
=======
        <Route path="/admin/report" element={<ProductReport />}></Route>

        <Route path="/admin/:id" element={<Adminproductdetails />}></Route>

>>>>>>> Stashed changes
    </Routes>

  );
}


export default App;

