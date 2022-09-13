import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../layout/Header/Header'
import axios from "axios"
import './Cart.css';
import Swal from 'sweetalert2'




const Cart = () => {



    const loadData = (id) => {
        //axios.get("http://localhost:3000/productRoute/get-product")
        window.location.href = `${id}`
    }

    const { id } = useParams();

    const [productData, setProductData] = useState({
        productName: "",
        productImage: "",
        stocks: "",
        price: "",
        description: "",
    });



    // const loadData = (id) => {
    //     //axios.get("http://localhost:3000/productRoute/get-product")
    //     window.location.href = `${id}`
    // }


    const getProduct = async (id) => {
        await axios.get("http://localhost:3000/productRoute/get-product/" + id)
            .then(res => {
                // const allProductData = res.data.result;
                setProductData({
                    productName: res.data.result.productName,
                    productImage: res.data.result.productImage,
                    stocks: res.data.result.stocks,
                    price: res.data.result.price,
                    description: res.data.result.description,
                })

                // setProductData({productImage:allProductData.productImage, price:allProductData.price})
            })

            .catch(err => {
                console.log(err)
            })
    }


    

    useEffect(() => {
        getProduct(id);
    }, [])


    return (
        <div>

            ddd
            
            <img src={productData.productImage} />
            <h2> {productData.productName} </h2>
            <h2> {productData.price} </h2>
            <h2> {productData.description} </h2>

           

        </div>

    );
};


export default Cart;