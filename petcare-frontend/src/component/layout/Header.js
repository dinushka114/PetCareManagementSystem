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

        link1Text = "Home"
        link2Text = "Product"
        link3Text = "Contact"
        link4Text = "About"

        link1Url = "/"
        link2Url = "/product"
        link3Url = "/contact"
        link4Url = "/about"

        link1Size = "1.3vmax"

        link1Color = "rgba(35, 35, 35, 0.8)"

        nav1justifyContent = "flex-end"
        nav2justifyContent = "flex-end"
        nav3justifyContent = "flex-start"

        link1ColorHover = "#eb4034"
        link2ColorHover = "#eb4034"
        link3ColorHover = "#eb4034"
        link4ColorHover = "#eb4034"

        link2Margin = "1vmax"
        link3Margin = "0"
        link4Margin = "1vmax"

         
        
        
    />
  );
  
};

export default Header;