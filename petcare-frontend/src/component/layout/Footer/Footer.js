import React from 'react';
import store from "../../../images/playstore&appstore.jpg";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id = "footer">


        <div class = "leftFooter">
            <h4> Download Our App </h4>
            <p> Download App for Android and IOS Mobile Phone </p>
            <img src={store} alt="PlaystoreAndAppstore" />
        </div>



        <div class = "midFooter">
            <h1> Pet Accessories. </h1>
            <p> High quality is our first priority </p>
            <p> Copyrights 2021 &copy; MeSoori </p>
        </div>



        <div class = "rightFooter">
            <h4> Follow Us </h4>
            <a href = "https://www.instagram.com/petmatepetproducts/"> Instagram </a>
            <a href = "https://www.facebook.com/petproductsdirectory"> Facebook </a>
            <a href = "https://twitter.com/PetProductsllc"> Twitter </a>
        </div>


    </footer>
  )
}

export default Footer;