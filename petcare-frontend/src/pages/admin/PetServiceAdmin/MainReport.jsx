import './reports.scss'
import React from 'react'
import Sidebar from '../../../components/admin/Sidebar/sidebar';
import Report from './Reports'
import { width } from '@mui/system';


const MainReport = () => {
    return (
        <div className='home'>
              <Sidebar/>
            <div className='homeContainer'>
            <Report/>
            </div>

        </div>
      )
}

export default MainReport