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


        <Cards> 
            <CardMedia>
                {
                    productData.map((products) => {
                        return(
                            <div className = 'card'>
                               <div className = 'card-img-top' src = {products.productImage} />
                               <div className = 'container'> {products.productName} </div>
                               <button onClick = {()=>{loadData(products._id)}} className='view-button'> View More </button>
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
