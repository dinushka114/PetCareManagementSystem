import React, { Fragment, useEffect } from 'react';
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import "./Home.css"
import Product from './Product.js';
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';

const product = {
    name: "Dog Grooming Brush",
    images: [{url : "https://i.pinimg.com/736x/7e/90/27/7e902739b301da607c3b5bf1c84f05ab.jpg"}],
    price: "Rs. 4850.00",
    _id: "dd",
};


const Home = () => {

    const dispatch = useDispatch();

    const { loading, error, products, productsCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

  return ( 
    <div>
        <Header />

        <Fragment> 

            <MetaData title = "PAWELL'S PET PRODUCTS" />

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
