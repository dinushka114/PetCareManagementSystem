import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import axios from "axios"
import { ThemeContext } from '@emotion/react';
import { Button, CardContent, CardMedia, ownerDocument, TableContainer, useEventCallback } from '@mui/material';
import Cards from '@mui/material/Card';
import Paper from "@mui/material/Paper";
import './ProductDetails.css';
import Carousel from 'react-material-ui-carousel';

const ProductDetails = () => {

    const { id } = useParams();

    const [productData, setProductData] = useState();



    // const loadData = (id) => {
    //     //axios.get("http://localhost:3000/productRoute/get-product")
    //     window.location.href = `${id}`
    // }
    //poddk inda amma katha krnwa balala ennam
    //ha

    const getProduct = async (id) => {
        await axios.get("http://localhost:3000/productRoute/get-product/" + id)
            .then(res => {
                const allProductData = res.data.result;
                setProductData(allProductData)
                console.log(allProductData)
                // setProductData({productImage:allProductData.productImage, price:allProductData.price})
            })

            .catch(err => {
                console.log(err)
            })
    }





    useEffect(() => {
        getProduct(id);
    },[])

    return (
        <div>
            <Header />
            <Fragment>

                {/* <img src={productData.productImage} /> */}

                <div className='ProductDetails'>

                    <div>
                        {/* <Carousel> */}
                            



                                <img  src={"https://th.bing.com/th/id/OIP.fOVbrKrST7dbdVTRGUG0VAHaF7?pid=ImgDet&rs=1"} />


                            
                        {/* </Carousel> */}

                    </div>

                    <div>
                        <div className='detailsBlock-1'>
                            <h2> {productData.productName} </h2>
                        </div>

                        <div className='detailsBlock-3'>
                            <h1> {productData.price} </h1>

                            <div className='detailsBlock-3-1'>
                                <div className='detailsBlock-3-1-1'>
                                    <button> - </button>
                                    <input value="1" type="number" />
                                    <button> + </button>
                                </div> {" "}
                                <button> ADD TO CART </button>
                            </div>

                            <p>
                                Status : {" "}
                                <b className={productData.stocks < 1 ? "redColor" : "greenColor"}>
                                    {productData.stocks < 1 ? "OutOfStock" : "InStock"}
                                </b>
                            </p>

                        </div>

                        <div className='detailsBlock-4'>
                            Description : <p> {productData.description} </p>
                        </div>

                        <button className='buyNow'> BUY IT NOW </button>



                    </div>

                </div>

                <Footer />

            </Fragment>
        </div>

    );
};


export default ProductDetails;