
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import axios from "axios"
import Sidebar from './Sidebar';


const Adminproductdetails = () => {
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

    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        if (productData.stocks <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    };
    const decreaseQuantity = () => {
        if (1 >= quantity) return;
        const qty = quantity - 1;
        setQuantity(qty);
    };
    const addToCartHandler = () => {
        alert.success("dd");
    };
    useEffect(() => {
        getProduct(id);
    }, [])
    return (
        <div className="dashboard">
            <Sidebar />
        <div>
            <Header />
            
            <Fragment>
                
               
                    <div>

                    
                        
                   <center><img src={productData.productImage} width="50%" 
     height="500%"/></center> 

    <center>

                            <h2> {productData.productName} </h2>


                            <h5> {productData.price} </h5>
                            
                              <p> {productData.description} </p>
                           
                              </center> 


                            
                        


                       





                    </div>
                
            </Fragment>
        </div>
</div>


    );
};

export default Adminproductdetails;
