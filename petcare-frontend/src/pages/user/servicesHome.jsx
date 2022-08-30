import React from 'react'
import './servicesHome.scss'
import Sidebar from '../../components/admin/Sidebar/sidebar'

const home = () => {
  return (
    <div>
        <img className='main-image' src='https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/dog-and-owner-during-covid-pandemic_0.gif?itok=68NnwzR_'></img>
        <div className='centered'>Services</div>
        <h1>Best Services For Your Pets</h1>
        <p className='heading-description'>At Fetch, we serve pets of every type, age, and phase of life because we truly love animals. We show it with every belly rub, long walk, scratch behind the ear, and treat we give. We’d love to be your trusted sidekick for a healthy and happy pet because we know we can deliver trusted, quality care and a professional, stress-free experience for you.</p>       
    </div>
  )
}

export default home