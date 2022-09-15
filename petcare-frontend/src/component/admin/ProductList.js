import './productList.css'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useEffect, useState, } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import React from 'react'



const ProductList = () => {
    const [productData,setProductData] = useState([]);

    const getProductData = () => {
        axios.get('http://localhost:3000/productRoute/get-product')
            .then(res => {
                const allProductData = res.data.result;
                setProductData(allProductData)       
            })
    }

    const deleteProduct = (id)=>{
      
       
          axios.delete("http://localhost:3000/productRoute/delete-product/"+id)
          .then(res=>{
            Swal.fire("Product Deleted Successfully!!");
            if(res.status===200){
             // Swal.fire("Product Deleted")
              getProductData()
            }
          })
      }

    useEffect(()=>{
        getProductData()
    },[]);

    return(
        <div className = "dashboard">
            <Sidebar />
         
        <TableContainer component={Paper} className="table">
            <div className='productListContainer'>
        <h1 id="productListHeading">ALL PRODUCTS</h1>
        <table  className="table table-striped" id="products">
            
          <thead>
            <tr >
              <th scope="col">Product ID</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Stocks</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>
              <th colSpan={2}>Action</th>

            </tr>
          </thead>
          <tbody>
            {
              productData.map((products) => {
                return (
                  <tr>
                    <td><center>{products._id}</center></td>
                    <td><center><img className = 'image' src = {products.productImage} /> </center> </td>
                    <td><center>{products.productName}</center></td>
                    <td><center>{products.stocks} </center></td>
                    <td><center>{products.price}</center></td>
                    <td className="width"><center><textarea cols='45' rows='2'>{products.description.substring(0,150)}</textarea></center> </td>
                    <td><center><Link to = {`/admin/update-product/${products._id}`}><EditIcon className='edit' /></Link></center></td> 
                    <td><center><DeleteIcon className='delete' onClick={()=>deleteProduct(products._id)} /></center></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </div>
      </TableContainer>
      </div>
       
    );
}

export default ProductList;