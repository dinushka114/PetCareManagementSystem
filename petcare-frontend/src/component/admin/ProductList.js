import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './productList.css';
import axios from 'axios';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
const Swal = require('sweetalert2');




const ProductList = () =>{

  const [productData,setproductData] = useState([]);
  const [searchedData , setSearchedData] = useState(productData);

  const handleSearch = (e) =>{
    // console.log(e.target.value);
    const value = e.target.value;
    let res = [];
    res = productData.filter(data=>{
      return data.productName.toLowerCase().includes(value.toLowerCase());
    });

    setSearchedData(res)
  }

  const getProductData = () => {
    axios.get('http://localhost:3000/productRoute/get-product')
            .then(res => {
                const allProductData = res.data.result;
                setproductData(allProductData)     
                setSearchedData(allProductData)
            })
  }

  const deleteProduct = (id)=>{
    var answer = window.confirm("Are you sure you want to delete?")
      if(answer){
        axios.delete("http://localhost:3000/productRoute/delete-product/"+id)
        .then(res=>{
          if(res.status===200){
            Swal.fire("Product Deleted")
            getProductData()
          }
        })
      }
    }

    useEffect(()=>{
      getProductData()
    },[]);

  return (

    <TableContainer component={Paper} className="table">
    <>
  
    <div className="container" style={{float:'right',width: '81%', marginLeft: '10px'}}>
    <h1>All Pet Accessories</h1>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="input-group mb-3" >
            <input type='text' placeholder="Search by product name.." style={{width: '74%',borderRadius: '4px',border: '2px solid #ccc',height:'130%'}}
              onChange={handleSearch} width='40%'/>
          </div>
          <div className="row">
            <div className="table-responsive ">
              <table className='table table-striped table-hover table-bordered'>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Stocks</th>
                    <th>Price</th>
                    <th>Description</th>
                    
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                searchedData.map((products) => {
                return (
                  <tr key={products._id}>
                    <td>{products.productName}</td>
                    <td> <img src={products.productImage} alt="image" className="image"/> </td>
                    <td>{products.stocks}</td>
                    <td>{products.price}</td>
                    <td>{products.description}</td>
                    
                    
                    <td><center><Link to={`/admin/update-product/${products._id}`}><EditIcon className='edit' /></Link></center></td>
                        <td><center><DeleteIcon className='delete' onClick={() => deleteProduct(products._id)} /></center></td>
                  </tr>
                )
              })
            }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    </>
    </TableContainer>
  );

  
}

export default ProductList;
