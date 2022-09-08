import React, { useState, useEffect } from 'react'
import './newProduct.css';
//import image from '../../../images/update.jpg';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar';

const UpdateProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({
        productName: "",
        productImage: "",
        stocks: "",
        price: "",
        description: ""

    });

    const [productName, setproductName] = useState("");
    const [productImage, setproductImage] = useState("");
    const [stocks, setstock] = useState("");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [selectedImage, setSelectedImage] = useState();

    const navigate = useNavigate();

    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0])
    }

    const getProductData = async (id) => {
        await axios.get("http://localhost:3000/productRoute/get-product/" + id)
            .then(res => {

                setproductName(res.data.result.productName);
                setproductImage(res.data.result.productImage);
                setstock(res.data.result.stocks);
                setprice(res.data.result.price);
                setdescription(res.data.result.description);

            })
    }

    useEffect(() => {
        if (id) {
            getProductData(id);
        }
    }, []);

    const updateProduct = async (e) => {
        e.preventDefault();

        //console.log("Hello")

        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productImage', selectedImage)
        formData.append('stocks', stocks)
        formData.append('price', price)
        formData.append('description', description)

        await axios.put("http://localhost:3000/productRoute/update-product/" + id,
            formData)
            .then(() => {
                Swal.fire("Product Updated Successfully!!");
                navigate('/');
            }).catch((err) => {
                alert(err);
                console.log(err);
            })
    }

   

    return (
        <div className="dashboard">
            <Sidebar />
            <div className='newProductContainer'>

                <h1>UPDATE PRODUCT</h1>
                <form  encType='multipart/form-data' class='createProductForm'>

                    <table>
                        <div className>
                            <label for="productName">Product Name</label>
                            <input name="productName" id="productName" className='cat' required
                                onChange={(e) => {
                                    setproductName(e.target.value);
                                }} />

                        </div>

                        <div>
                            <label for="price">Price</label>
                            <input type='text' name="price" id="price" className='cat' required
                                onChange={(e) => {
                                    setprice(e.target.value);
                                }} />
                        </div>

                        <div>
                            <label for="description">Description</label>
                            <textarea name="description" id="description" rows="4" className='cat' required
                                onChange={(e) => {
                                    setdescription(e.target.value);
                                }} />
                        </div>

                        <div>
                            <label for="stocks">Stocks</label>
                            <input type="text" name="number" pattern="\d{1,2}(?!\d)|100" title="Please enter numeric values only." id="stocks"
                                className='cat' required
                                onChange={(e) => {
                                    setstock(e.target.value);
                                }} />

                        </div>

                        <label for="img">Product Image</label>
                        <center><input type='file' name="productImage" id="productImage" required className='dog'
                            onChange={handleImageSelect}
                        /> </center>





                        <input type="submit" name='Submit' className='submit' onClick={updateProduct} />

                    </table>
                </form>

            </div>
        </div>

    )
}

export default UpdateProduct;