
import React from 'react'
import './newProduct.css'
//import Sidebar from '../../../components/admin/Sidebar/sidebar'
//import {useFormik} from "formik";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
//import Swal from 'sweetalert2';
import { Input } from '@mui/material';

export default function NewProduct() {
    const [productName, setproductName] = useState("");
    const [productImage, setproductImage] = useState("");
    const [stocks, setstock] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const handleSearchArea = (e) => {
        console.log(e.target.value);
    }
    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
    }
    function sendProduct(e) {
        e.preventDefault();
        const newProduct = {
            productName,
            productImage,
            stocks,
            price,
            description
        }
        const formData = new FormData();
        formData.append('productName', productName)
        formData.append('productImage', selectedFile)
        formData.append('stocks', stocks)
        formData.append('price', price)
        formData.append('description', description)
        console.log(formData)
        axios.post("http://localhost:3000/productRoute/get-product", formData).then(() => {
            // Swal.fire("product added")
        }).catch((err) => {
            console.log(err)
        })
    }



    return (
        <div className='newProductContainer'>
            
                <h1>ADD PRODUCT</h1>
                <form onSubmit={sendProduct} encType='multipart/form-data' class='createProductForm'>
                    
                        
                            <div className>
                                <label for="productName">Product Name</label>
                                <input name="productName" id="productName" className = 'cat'
                                    onChange={(e) => {
                                        setproductName(e.target.value);
                                    }} />
                            
                            </div>

                            <div>
                                    <label for="price">Price</label>
                                    <input type='text' name="price" id="price" className = 'cat' 
                                        onChange={(e) => {
                                            setprice(e.target.value);
                                        }} />
                            </div>   
                        
                            <div>
                                <label for="description">Description</label>
                                <textarea name="description" id="description" rows="4" className = 'cat'
                                    onChange={(e) => {
                                        setdescription(e.target.value);
                                    }} />
                            </div>
                        
                            <div>
                                <label for="stocks">Stocks</label>
                                <input type="text" name="stocks" id="stocks" 
                                    onChange={(e) => {
                                        setstock(e.target.value);
                                    }} />
                           
                            </div>

                                   
                                   <center><input type='file' name="productImage" id="productImage" 
                                        onChange={handleFileSelect}
                                    /> </center> 
                            
                        
                        
                        
                                    
                                <input type="submit" name='Submit' className='submit' />
                            
                    
                </form>
            
        </div>
    )
}
