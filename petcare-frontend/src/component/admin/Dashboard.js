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
import { Link } from "react-router-dom"
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Swal from 'sweetalert2';

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

    const deleteProduct = (id) => {


        axios.delete("http://localhost:3000/productRoute/delete-product/" + id)
          .then(res => {
            Swal.fire("Product Deleted Successfully!!");
            if (res.status === 200) {
              // Swal.fire("Product Deleted")
              getProductData()
            }
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
                                        <div className='container2'> {products.description} </div>

                                        <center><button onClick={() => { loadData(products._id) }} className='view-button'> View More </button></center>

                                        <center><button className='dashboard-button'>
                                            <Link to = {`/admin/update-product/${products._id}`}><EditIcon className='edit' /></Link>
                                            <DeleteIcon className='delete' onClick={() => deleteProduct(products._id)} />

                                        </button></center>
                                        
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