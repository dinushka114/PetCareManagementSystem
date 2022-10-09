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
                        <div className="container">{services.serviceName}</div>
                        <button onClick={()=>{loadData(services._id)}} className='view-button'>View More</button> 
                    </div>
               
                    )   
            })
            }
        </CardMedia>
    </Cards>
    )
}

export default Card;