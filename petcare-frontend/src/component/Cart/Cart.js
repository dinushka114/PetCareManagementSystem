import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../layout/Header/Header'
import Swal from 'sweetalert2';
import axios from "axios"
import './Cart.css';



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
            <Header />

            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
            </div>


            <img src={productData.productImage} />
            <h2> {productData.productName} </h2>
            <h1> {productData.price} </h1>
            <h1> {productData.stocks} </h1>

        </div>

    );
};


export default Cart;