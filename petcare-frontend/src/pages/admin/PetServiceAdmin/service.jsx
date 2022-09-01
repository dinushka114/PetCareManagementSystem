import React from 'react'
import Sidebar from '../../../components/admin/Sidebar/sidebar'
import Addservice from './add-service'
import Viewservice from './view-service'


const Service = () => {
  return (
    <div className='home'>
          <Sidebar/>
        <div className='homeContainer'>
        <h1>Services</h1>
          <Viewservice/>
        </div>

    </div>
  )
}

export default Service