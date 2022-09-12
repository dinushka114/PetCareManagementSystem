import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../layout/Header/Header'
import axios from "axios"
import './Cart.css';
import Swal from 'sweetalert2'




const Cart = () => {



    const { id } = useParams();


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
            // .catch(err=>{
            //     alert(err)
            // })
    }

    useEffect(() => {
        if (id) {
            getProductData(id);
        }

    }, []);

    const updateProduct = async (e) => {
        e.preventDefault();

        //console.log("Hello")  balnda dn hrid kyl image eka na neda na

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
        <div>
            <Header />

            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
            </div>

            <div className>
                            <label for="productName">Product Name</label>
                            <input name="productName" defaultValue={productName} id="productName" className='cat' required
                                onChange={(e) => {
                                    setproductName(e.target.value);
                                }} />

                        </div>

            

           

        </div>

    );
};


export default Cart;