import React from 'react'
import Updateservice from './update-service'
import Sidebar from '../../../components/admin/Sidebar/sidebar'

const ServiceHome = () => {
  return (
    <div className='home'>
          <Sidebar/>
        <div className='homeContainer'>
          <Updateservice/>
        </div>

    </div>
  )
}

export default ServiceHome