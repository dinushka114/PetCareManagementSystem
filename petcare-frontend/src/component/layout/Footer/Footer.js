import React from 'react';
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/appstore.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer id = "footer">


        <div className = "leftFooter">
            <h4> Download Our App </h4>
            <p> Download App for Android and IOS Mobile Phone </p>
            <img src={playstore} alt="PlayStore" />
            <img src={appstore} alt="Appstore" />
        </div>



        <div className = "midFooter">
            <h1> Pet Accessories. </h1>
            <p> High quality is our first priority </p>
            <p> Copyrights 2021 &copy; MeSoori </p>
        </div>



        <div className = "rightFooter">
            <h4> Follow Us </h4>
            <a href = "https://www.instagram.com/petmatepetproducts/"> Instagram </a>
            <a href = "https://www.facebook.com/petproductsdirectory"> Facebook </a>
            <a href = "https://twitter.com/PetProductsllc"> Twitter </a>
        </div>


    </footer>
  )
}

export default Footer;