import React from 'react';
import Sidebar from './Sidebar.js';
import './dashboard.css';

import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'


import MetaData from '../layout/MetaData';
import { getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import Cards from '@mui/material/Card';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { Button, CardContent, CardMedia, TableContainer, useEventCallback } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';

const Dashboard = () => {
    return (
    <div className='dashboard'>
        <Sidebar />

        <div className='dashboardContainer'>

        </div>

    </div>
    );
};

export default Dashboard;