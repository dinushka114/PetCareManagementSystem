import React , { Fragment, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import { Typography } from '@material-ui/core'

import { useParams } from 'react-router-dom'
import axios from "axios"



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
        data: [30,10],
    },
  ],
};





const Report = () => {

   

  return (

    <div className="dashboard">
            <Sidebar />
            <div className='dashboardContainer'>
                <Typography component = "h1"> PRODUCT REPORT  </Typography>
                <div className='dashboardSummary'>
                    <div>
                        <p> Total Amount <br /> Rs. 2000.00 </p>
                    </div>
                    <div className='dashboardSummaryBox2'>
                        <Link to='/admin/all-products'>
                            <p>Product</p>
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

    

</div>
</div>
  

  );
};

export default Report;