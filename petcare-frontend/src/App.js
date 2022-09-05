import './App.css';
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import WebFont from "webfontloader";
import React from 'react';
import Footer from "./component/layout/Footer/Footer.js";
import Home from './component/Home/Home';



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
    </Routes>
   </Router>
  );
}

export default App;
