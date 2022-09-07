import './productList.css'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useEffect, useState, } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
// const Swal = require('sweetalert2')


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
            if(res.status===200){
            //   Swal.fire("Product Deleted")
              getProductData()
            }
          })
      }

    useEffect(()=>{
        getProductData()
    },[]);

    return(
        <TableContainer component={Paper} className="table">
        <table  className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
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
                    <td>{products._id}</td>
                    <td>{products.productName}</td>
                    <td>{products.stocks}</td>
                    <td>{products.price}</td>
                    <td className="width">{products.description.substring(0,150)}</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button onClick={()=>deleteProduct(products._id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </TableContainer>
       
    );
}

export default ProductList;