import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ThemeContext } from '@emotion/react';
import { Button, CardContent, CardMedia, ownerDocument, TableContainer, useEventCallback } from '@mui/material';
import Cards from '@mui/material/Card';
import Paper from "@mui/material/Paper";

const ProductDetails = () => {

    const { id } = useParams();

    const [productData, setProductData] = useState({
        productImage:""
    });

    //ohtnata one key tik okkoma danna\
    //contactNo ohoma dagena yanna

    const loadData = (id) => {
        //axios.get("http://localhost:3000/productRoute/get-product")
        window.location.href = `${id}`
    }


    const getProduct = async (id) => {
        await axios.get("http://localhost:3000/productRoute/get-product" + id)
            .then(res => {
                const allProductData = res.data.result;
                
                setProductData({productImage:allProductData.productImage, price:allProductData.price})
            })

            .catch(err => {
                console.log(err)
            })
    }

    //dn state variable hadala result object eke ubata one tika e variables watala set krpan
    //eeta passe e variable tika use krnd puluwan



    useEffect(() => {
        getProduct(id);
    })

    return (
        <Cards>
            <CardMedia>
                {


                    <div className='card'>
                        <img className='card-img-top' src={productData.productImage} />
                        <div>{productData.price}</div>
                        <div className="container"></div>
                        <button onClick={() => { loadData() }} className='view-button'>View More</button>
                    </div>



                }
            </CardMedia>
        </Cards>
    )
}


export default ProductDetails;