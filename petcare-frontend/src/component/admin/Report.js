import React, { Fragment, useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { Typography } from '@material-ui/core'

import { useParams } from 'react-router-dom'
import axios from "axios"
import { useReactToPrint } from 'react-to-print'


import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Swal from 'sweetalert2';


const data = {
  labels: ['Initial', 'Total Products'],
  datasets: [
    {
      label: "TOTAL PRODUCTS",
      backgroundColor: ['tomato'],
      hoverBackgroundColor: "rgb (197, 72, 49)",
      data: [1, 10],
    },
  ],
};

const labels = ["Out of Stock", "InStock"];
const test = {
  labels: labels,
  datasets: [
    {
      backgroundColor: ["#00A6B4", "#6800B4"],
      hoverBackgroundColor: ["#4B5000", "#35014F"],
      data: [30, 10],
    },
  ],
};





const Report = () => {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'product-data',
    onAfterPrint: () => alert('Print Success')
  });

  const [productData, setProductData] = useState([]);

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
      <div className='dashboardContainer'>
        <div ref={componentRef} style={{  width: '100%', height: window.innerHeight }}>
        <h1 id="productListHeading">PRODUCTS REPORT</h1>
          <div className='dashboardSummary'>
            <div>
              <p> Total Amount <br /> Rs. 2000.00 </p>
            </div>
            <div className='dashboardSummaryBox2'>
              <Link to='/admin/all-products'>
                <p>Products</p>
                <p>50</p>
              </Link>
              <Link to='/cart'>
                <p>Cart</p>
                <p>10</p>
              </Link>
              <Link to='/cart'>
                <p>Users</p>
                <p>23</p>
              </Link>
            </div>

          </div>

          <div className="lineChart">
            <Line data={data} />

          </div>


          <div className="doughnutChart">
            <Doughnut data={test} />
          </div>

          <TableContainer component={Paper} className="table">
            <div className='productListContainer'>
              <h1 id="productListHeading">ALL PRODUCTS</h1>
              <table className="table table-striped" id="products">

                <thead>
                  <tr >
                    <th scope="col">Product ID</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Stocks</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>


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

                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>

            </div>
          </TableContainer>

         <center><button onClick={handlePrint} className='printBtn'>Print</button></center> 



        </div>
      </div>
    </div>



  );



};

export default Report;