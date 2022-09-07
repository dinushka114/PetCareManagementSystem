import React from 'react'
import './servicesHome.scss'
import Sidebar from '../../components/admin/Sidebar/sidebar'
import axios from 'axios';
import { useEffect, useState, } from "react";
import Card from '../../components/user/Card/Card'
import Img from './MoreService/cover.png'

const Home = () => {

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
    <div>
        <img className='main-image' src={Img}></img>
        <div className='centered'></div>
        <h1>Best Services For Your Pets</h1>
        <p className='heading-description'>At Fetch, we serve pets of every type, age, and phase of life because we truly love animals. We show it with every belly rub, long walk, scratch behind the ear, and treat we give. We’d love to be your trusted sidekick for a healthy and happy pet because we know we can deliver trusted, quality care and a professional, stress-free experience for you.</p>       
        <Card/>
    </div>
  )
}

export default Home