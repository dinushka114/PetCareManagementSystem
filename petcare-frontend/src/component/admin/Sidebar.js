import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'

const Sidebar = () => {
    return (
        <div style={sideBarStyles}>
            <Header/>
            <Link to = "/">
                <img src = {logo} alt='petproducts' /> 
            </Link>

            <Link to='/admin/dashboard'>
                <p>
                    <DashboardIcon /> Dashboard
                </p>
            </Link>

            <Link to='/admin/all-products'>
                <p>
                    <PostAddIcon /> All 
                </p>
            </Link>
            
            <Link to='/admin/add-product'>
                <p>
                    <AddIcon /> Create
                </p>
            </Link>

            <Link to='/admin/report'>
                <p>
                    <RateReviewIcon /> Report
                </p>
            </Link>
        
            
          
        </div>
    );
};
        
        
    
// .sidebar {
//     background-color: rgb(255, 255, 255);
//     display: flex;
//     flex-direction: column;
//     padding: 4rem 0;
//   }
                
const sideBarStyles = {
    backgroundColor:'rgb(255, 255, 255)',
    display:'flex',
    flexDirection:'column',
    padding:'4rem 0'
}    


// .sidebar a {
//     text-decoration: none;
//     color: rgba(0, 0, 0, 0.493);
//     font: 200 1rem "Roboto";
//     padding: 2rem;
//     transition: all 0.5s;
//   }
                    

export default Sidebar;