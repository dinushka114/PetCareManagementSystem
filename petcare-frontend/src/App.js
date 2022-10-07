import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardingAdminHome from './pages/petboarding/admin/Dashboard';
import BoardingReports from './pages/petboarding/admin/Reports';
import BoardingUpdate from './pages/petboarding/admin/UpdateBoarding';
import AddNewBoarding from './pages/petboarding/admin/AddNewBoarding';
import BoardingClient from './pages/petboarding/user/petBoardingPlaces';
import UserHome from './pages/user/servicesHome';
import ServiceHome from './pages/admin/PetServiceAdmin/service'
import AddService from './pages/admin/PetServiceAdmin/addServiceHome'
import Card from './components/user/Card/Card'
import MoreService from './pages/user/moreService'
import Report from './pages/admin/PetServiceAdmin/MainReport'
import UpdateServiceHome from './pages/admin/PetServiceAdmin/updateServiceHome';
import MainDashboard from "./pages/user/DashBoard/DashBoard";
import Login from "./pages/user/Login/Login";
import Register from "./pages/user/Register/Register";
import Dashboard from "./pages/petboarding/admin/Dashboard";
import AddNewBoarding from "./pages/petboarding/admin/AddNewBoarding";
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails.js';
import Dashboard from './component/admin/Dashboard.js';
import ProductList from './component/admin/ProductList';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import Cart from "./component/Cart/Cart.js";
import Report from './component/admin/Report.js';



function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<MainDashboard />} />

        <Route exact path='/pet-boarding' element={<BoardingAdminHome />} />
        <Route exact path='/pet-boarding-add' element={<AddNewBoarding />} />
        <Route exact path='/pet-boarding-report' element={<BoardingReports />} />
        <Route exact path='/update/:id' element={<BoardingUpdate />} />
        <Route exact path='/boarding' element={<BoardingClient />} />

        <Route path="/pet-services" element={<UserHome />} />
        <Route path="/get-service" element={<ServiceHome />} />
        <Route path="/add-service" element={<AddService />} />
        <Route path="/card" element={<Card />} />
        <Route path="/service/:id" element={<MoreService />}></Route>
        <Route path="/reports" element={<Report />}></Route>
        <Route path="/update-service/:id" element={<UpdateServiceHome />}></Route>

        <Route path='/:id' element={<ProductDetails />}></Route>
        <Route path='/admin/dashboard' element={<Dashboard />}></Route>
        <Route path="/admin/all-products" element={<ProductList />}></Route>
        <Route path="/admin/add-product" element={<NewProduct />}></Route>
        <Route path="/admin/update-product/:id" element={<UpdateProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin/report" element={<Report />}></Route>
      </Routes>
    </>
  );
}


export default App;

