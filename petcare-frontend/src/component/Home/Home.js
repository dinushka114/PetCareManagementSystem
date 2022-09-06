import React, { Fragment, useEffect, useState } from 'react';
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import "./Home.css"
import Product from './Product.js';
import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '@mui/material/Card';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Button, CardContent, CardMedia, TableContainer, useEventCallback } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';


const Home = () => {

    const [productData, setProductData] = useState([]);

    const loadData = (id) => {
        //axios.get("http://localhost:3000/productRoute/get-product")
        window.location.href = `${id}`
    }

    const getProductData = () => {
        axios.get('http://localhost:3000/productRoute/get-product')
            .then(res => {
                const allProductData = res.data.result;
                setProductData(allProductData)
            })
    }

    useEffect(() => {
        getProductData()
    }, []);







    return (
        <div>
            <Header />

            <MetaData title="PAWELL'S PET PRODUCTS" />
            <div className="banner">
                <p> Welcome to Pawell's Pet Products </p>
                <h1> FIND AMAZING PRODUCTS BELOW </h1>
                <a href="#container">
                    <button>
                        Scroll
                    </button>
                </a>
            </div>

            <h2 className = "homeHeading"> Featured Products </h2> 

            <Cards>
                <CardMedia>
                    {
                        productData.map((products) => {
                            return (
                                <div className='card' id='container'>
                                    <div className='card-img-top' src={products.productImage} div/>
                                    <div className='container2'> {products.productName} </div>
                                    <div className='container2'> {products.price} </div>
                                    <center><button onClick={() => { loadData(products._id) }} className='view-button'> View More </button></center>
                                </div>
                            )
                        })
                    }




                </CardMedia>
            </Cards>


            <Footer />
        </div>
    );
};


export default Home;
