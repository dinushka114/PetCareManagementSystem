
import React, {useState} from 'react'
import './newProduct.css'
//import Sidebar from '../../../components/admin/Sidebar/sidebar'
//import {useFormik} from "formik";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Input } from '@mui/material';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    const [productName, setproductName] = useState("");
    const [productImage, setproductImage] = useState("");
    const [stocks, setstock] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const navigate = useNavigate();

    
    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0])
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
        formData.append('productImage', selectedImage)
        formData.append('stocks', stocks)
        formData.append('price', price)
        formData.append('description', description)

        console.log(formData)
        axios.post("http://localhost:3000/productRoute/add-product", formData).then(() => {
            Swal.fire("product added");
            navigate ('/');
        }).catch((err) => {
            alert(err);
            console.log(err);
        })
    }



    return (
        <div className = "dashboard">
            <Sidebar />
        <div className='newProductContainer'>
            
                <h1>ADD PRODUCT</h1>
                <form onSubmit={sendProduct} encType='multipart/form-data' class='createProductForm'>
                    
                        <table>
                            <div className>
                                <label for="productName">Product Name</label>
                                <input name="productName" id="productName" className = 'cat' required
                                    onChange={(e) => {
                                        setproductName(e.target.value);
                                    }} />
                            
                            </div>

                            <div>
                                    <label for="price">Price</label>
                                    <input type='text' name="price" id="price" className = 'cat' required 
                                        onChange={(e) => {
                                            setprice(e.target.value);
                                        }} />
                            </div>   
                        
                            <div>
                                <label for="description">Description</label>
                                <textarea name="description" id="description" rows="4" className = 'cat' required
                                    onChange={(e) => {
                                        setdescription(e.target.value);
                                    }} />
                            </div>
                        
                            <div>
                                <label for="stocks">Stocks</label>
                                <input type="text" name="number" pattern="\d{1,2}(?!\d)|100" title="Please enter numeric values only." id="stocks" 
                                className = 'cat' required 
                                    onChange={(e) => {
                                        setstock(e.target.value);
                                    }} />
                           
                            </div>

                                    <label for="img">Product Image</label>
                                   <center><input type='file' name="productImage" id="productImage" required className='dog' 
                                        onChange={handleImageSelect}
                                    /> </center> 
                            
                        
                        
                        
                                    
                                <input type="submit" name='Submit' className='submit' onClick={sendProduct} />
                            
                    </table>
                </form>
            
        </div>
        </div>
    )
}


export default NewProduct;