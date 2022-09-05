import React from 'react'
import Addservice from './add-service'
import Sidebar from '../../../components/admin/Sidebar/sidebar'

const ServiceHome = () => {
  return (
    <div className='home'>
          <Sidebar/>
        <div className='homeContainer'>
          <Addservice/>
        </div>

    </div>
  )
}

export default ServiceHome