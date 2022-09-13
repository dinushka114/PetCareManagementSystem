import React, { Fragment, useEffect, useState } from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import MetaData from '../layout/MetaData';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '@mui/material/Card';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Button, CardContent, CardMedia, TableContainer, useEventCallback } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';

const Dashboard = () => {

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
        <div className='dashboard'>
            <Sidebar />

            <div className='dashboardContainer'>

                <h2 className="homeHeading"> BEST SELLING PRODUCTS </h2>

                <Cards>
                    <CardMedia>
                        {
                            productData.map((products) => {
                                return (
                                    <div className='card' key={products._id}>
                                        <img className='card-img-top' src={products.productImage} />
                                        <div className='container2'> {products.productName} </div>
                                        <div className='container2'> {products.price} </div>
                                        <center><button onClick={() => { loadData(products._id) }} className='view-button'> View More </button></center>
                                    </div>
                                )
                            })
                        }




                    </CardMedia>
                </Cards>


            </div>

        </div>
    );
};

export default Dashboard;