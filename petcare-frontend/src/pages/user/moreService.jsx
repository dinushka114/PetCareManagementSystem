import './moreService.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ThemeContext } from '@emotion/react';
import { Button, CardContent, CardMedia, ownerDocument, TableContainer, useEventCallback } from '@mui/material';
import Cards from '@mui/material/Card';
import Paper from "@mui/material/Paper";
import Img from './MoreService/moredetailscover.jpg'

const MoreService = () => {

    const { id } = useParams();

    const [serviceData, setServiceData] = useState({
        serviceName:"",
        serviceImage:"",
        description:"",
        contactNo:"",
        openHoursStart:"",
        openHoursEnd:""
    });

    //ohtnata one key tik okkoma danna\
    //contactNo ohoma dagena yanna

    const loadData = (id) => {
        // axios.get("http://localhost:3000/pet-service/get-service/") 
        window.location.href = `${id}`
    }


    const getService = async (id) => {
        await axios.get("http://localhost:3000/pet-service/get-service/" + id)
            .then(res => {
                const allServiceData = res.data.result;
                // setServiceData(allServiceData)
                // console.log(allServiceData)
                setServiceData(
                    {serviceName:allServiceData.serviceName,
                    serviceImage:allServiceData.serviceImage,
                    contactNo:allServiceData.contactNo,
                    description:allServiceData.description,
                    openHoursStart:allServiceData.openHoursStart,
                    openHoursEnd:allServiceData.openHoursEnd
                    })
            })

            .catch(err => {
                console.log(err)
            })
    }

    //dn state variable hadala result object eke ubata one tika e variables watala set krpan
    //eeta passe e variable tika use krnd puluwan



    useEffect(() => {
        getService(id);
    },[])

    return (
        <Cards className='more_details_card'>
                    <img className='main-image' src={Img}></img>
        <div className='centered'></div>
        <h1>Best Services For Your Pets</h1>
        <p className='heading-description'>At Fetch, we serve pets of every type, age, and phase of life because we truly love animals. We show it with every belly rub, long walk, scratch behind the ear, and treat we give. We’d love to be your trusted sidekick for a healthy and happy pet because we know we can deliver trusted, quality care and a professional, stress-free experience for you.</p>    
            <CardMedia>
                {
                    <div className='card'>
                        <img className='card-img-top' src={serviceData.serviceImage} />                
           
                    </div>
                }
            </CardMedia>
            <CardContent className='more_details_card'>
                        <div className='Header'>{serviceData.serviceName}</div>
                        <div className='Description'>{serviceData.description}</div>
                        <div className='OpenHours'>Open Hours</div>
                        <div className='OpenHoursStart'>{serviceData.openHoursStart} - {serviceData.openHoursEnd}</div>
                        <div className='OpenHours'>Contact No </div>
                        <div className='ContactNo'>{serviceData.contactNo}<button className='AppointmentBtn'>Make appointment</button></div>
                        <div className="container"></div>
                        
            </CardContent>
        </Cards>
    )
}


export default MoreService