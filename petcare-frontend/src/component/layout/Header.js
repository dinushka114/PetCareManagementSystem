import React from 'react';
import {ReactNavbar} from 'overlay-navbar';
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <ReactNavbar 
        burgerColor = "#eb4034" 
        burgerColorHover = "#a62d24" 
        logo = {logo} 
        logoWidth = "20vmax"
        navColor1 = "white"
        logoHoverSize = "10px"
        logoHoverColor = "#eb4034"
        
    />
  );
  
};

export default Header;