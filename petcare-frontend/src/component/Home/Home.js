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
                <p> Welcome to TECHZONE  </p>
                
                <h1> FIND AMAZING PRODUCTS BELOW </h1>
                
                <center><button onClick={() => { loadData('/admin/all-products') }} className='spclBtn'> Admin </button></center>
                
                <center><button onClick={() => { loadData('/admin/dashboard') }} className='spclBtn2'> User </button></center>
                
            </div>
            

            <h2 className = "homeHeading"> BEST SELLING PRODUCTS </h2> 

            <Cards>
                <CardMedia>
                    {
                        productData.map((products) => {
                            return (
                                <div className='card' key={products._id}>
                                    <img className = 'card-img-top' src = {products.productImage} />
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
