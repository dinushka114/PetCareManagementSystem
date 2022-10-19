import './card.scss'
import Cards from '@mui/material/Card';
import React from 'react'
import { useEffect, useState, } from "react";
import {Navigate} from "react-router-dom"
import axios from 'axios';
import { Button, CardContent, CardMedia, TableContainer, useEventCallback } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';



const Card = () => {

    const [serviceData,setServiceData] = useState([]); 

    const loadData = (id) =>{
        // axios.get("http://localhost:3000/pet-service/get-service/") 
        window.location.href=`pet-services/${id}`
    }

    const getServiceData = () => {
        axios.get('http://localhost:3000/pet-service/get-service')
            .then(res => {
                const allServiceData = res.data.result;
                setServiceData(allServiceData)       
            })
    }


    useEffect(()=>{
        getServiceData()
    },[]);

  return (
    <Cards>
        <CardMedia>
        {
            serviceData.map((services)=>{
                return(
                    <div className='card'>
                        <img  src={services.serviceImage}/> 
                        <div className="container" style={containerStyles}>{services.serviceName}</div>
                        <button onClick={()=>{loadData(services._id)}} className='view-button'>View More</button> 
                    </div>
               
                    )   
            })
            }
        </CardMedia>
    </Cards>
    )
}

// .container {
//     padding: 2px 16px;
//     margin-top: 20px;
//     margin-bottom: 20px;
//     text-align: center;
//     color:rgb(243, 0, 73);
//     font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//     font-weight: 500;
//     font-size: 20px;
    
//   }

const containerStyles = {
    padding:'2px 16px',
    marginTop:'20px',
    marginBottom:'20px',
    textAlign:'center',
    color:'rgb(243 , 0 , 73)',
    // fontFamily:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
    fontWeight:'500',
    fontSize:'20px'

}

export default Card;