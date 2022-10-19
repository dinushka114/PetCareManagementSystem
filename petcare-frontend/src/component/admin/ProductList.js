import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
//import './productList.css'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useEffect, useState, } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import Sidebar from './Sidebar';
import Swal from 'sweetalert2';
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from '@mui/icons-material/Search';


const ProductList = () => {


  //search
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState(productData);
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = (e) => {
    let value = e.target.value;
    let result = [];

    result = productData.filter((data) => {
      return data.productName.search(value) != -1;

    });

    setFilteredData(result);
  }


  //print
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'product-data',
    onAfterPrint: () => alert('Print Success')
  });

  //const [productData, setProductData] = useState([]);

  const getProductData = () => {
    axios.get('http://localhost:3000/productRoute/get-product')
      .then(res => {
        const allProductData = res.data.result;
        setProductData(allProductData)
      })
  }

  const deleteProduct = (id) => {


    axios.delete("http://localhost:3000/productRoute/delete-product/" + id)
      .then(res => {
        Swal.fire("Product Deleted Successfully!!");
        if (res.status === 200) {
          // Swal.fire("Product Deleted")
          getProductData()
        }
      })
  }

  useEffect(() => {
    getProductData()
  }, []);

  return (

    <div className="dashboard">

      <Sidebar />







      <TableContainer component={Paper} className="table">
        <div className='productListContainer'>
          <h1 id="productListHeading">ALL PRODUCTS</h1>
          <input type='' className='search-product' placeholder='Search Product' />

          <button onClick={handlePrint} className='printBtn'>Print</button>

          <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
            <table className="table table-striped" id="products">

              <thead>
                <tr >
                  <th style={productListStyles} scope="col">Product ID</th>
                  <th style={productListStyles} scope="col">Product Image</th>
                  <th style={productListStyles} scope="col">Product Name</th>
                  <th style={productListStyles} scope="col">Stocks</th>
                  <th style={productListStyles} scope="col">Price</th>
                  <th style={productListStyles} scope="col">Description</th>
                  <th style={productListStyles} colSpan={2}>Action</th>

                </tr>
              </thead>
              <tbody>
                {
                  productData.map((products) => {
                    return (
                      <tr>
                        <td><center>{products._id}</center></td>
                        <td><center><img className='image' src={products.productImage} /> </center> </td>
                        <td><center>{products.productName}</center></td>
                        <td><center>{products.stocks} </center></td>
                        <td><center>{products.price}</center></td>
                        <td className="width"><center><textarea cols='45' rows='2'>{products.description.substring(0, 150)}</textarea></center> </td>
                        <td><center><Link to={`/admin/update-product/${products._id}`}><EditIcon className='edit' /></Link></center></td>
                        <td><center><DeleteIcon className='delete' onClick={() => deleteProduct(products._id)} /></center></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div >
      </TableContainer>


    </div>











  );
};




const productListStyles = {
  borderTopStyle:'hidden',
  borderRightStyle:'hidden',
  borderLeftStyle:'hidden',
  borderBottomStyle:'hidden',
  backgroundColor:'#eee',
  borderStyle:'none',
  borderRadius:'40px',
  paddingLeft:'10px',
  marginLeft:'20px',
  marginBottom:'20px',
  padding:'11px',
  width:'30%'

}

export default ProductList;