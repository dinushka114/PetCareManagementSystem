import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails.js';
import Dashboard from './component/admin/Dashboard.js';
import ProductList from './component/admin/ProductList';
import NewProduct from './component/admin/NewProduct';
import UpdateProduct from './component/admin/UpdateProduct';
import Cart from "./component/Cart/Cart.js";
import Report from './component/admin/Report.js';

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<ProductDetails />}></Route>
        <Route path='/admin/dashboard' element={<Dashboard />}></Route>
        <Route path="/admin/all-products" element={<ProductList />}></Route>
        <Route path="/admin/add-product" element={<NewProduct />}></Route>
        <Route path="/admin/update-product/:id" element={<UpdateProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/admin/report" element={<Report />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
