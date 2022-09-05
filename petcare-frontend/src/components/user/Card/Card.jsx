import './card.scss'
import Cards from '@mui/material/Card';
import React from 'react'
import { useEffect, useState, } from "react";
import axios from 'axios';
import { Button, CardContent, CardMedia, TableContainer } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';


const Card = () => {

    const [serviceData,setServiceData] = useState([]);

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
                        <img className='card-img-top' src={services.serviceImage}/> 
                        <div className="container">{services.serviceName}</div>
                        <button className='btn btn-success'>View More</button>
                    </div>
               
                    )   
            })
            }
        </CardMedia>
    </Cards>
    )
}

export default Card;