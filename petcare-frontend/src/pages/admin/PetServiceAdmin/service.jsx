import React from 'react'
import Sidebar from '../../../components/admin/Sidebar/sidebar'
import Addservice from './add-service'


const Service = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeContainer'>
        <Addservice/>
        </div>

    </div>
  )
}

export default Service