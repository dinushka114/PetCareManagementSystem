import './App.css';
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from './component/Home/Home';
import ProductDetails from './component/Product/ProductDetails.js'



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
    <Route path = '/' element = {<Home />}></Route>
    <Route path = '/:id' element = {<ProductDetails />}></Route>
    
    </Routes>
   </Router>
  );
}

export default App;
