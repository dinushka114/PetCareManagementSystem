import React, {Fragment} from 'react';
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import "./Home.css"
import Product from './Product.js';

const product = {
    name: "Dog Grooming Brush",
    images: [{url : "https://i.pinimg.com/736x/7e/90/27/7e902739b301da607c3b5bf1c84f05ab.jpg"}],
    price: "Rs. 4850.00",
    _id: "dd",
};


const Home = () => {
  return ( 
    <div>
        <Header />

        <Fragment> 
        <div className = "banner">
            <p> Welcome to Pawell's Pet Products </p>
            <h1> FIND AMAZING PRODUCTS BELOW </h1>

            <a href = "#container">
                <button> 
                    Scroll 
                </button>
            </a>
        </div>

        <h2 className = "homeHeading"> Featured Products </h2>

        <div className = "container" id = "container">
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
            <Product product = {product} />
        </div>

        </Fragment>


        <Footer />
    </div>
  );
};

export default Home;
