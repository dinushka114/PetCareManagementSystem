import './sidebar.css'
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
<div className="sidebar">
        <div className="top">
            <span className="logo">Pet Accessories</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <Link to={"/"} style={{ textDecoration: "none" }}>
                    <span>Dashboard</span>
                    </Link>
                </li>
                <p className='title'>PRODUCTS</p>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <Link to={"/get-service"} style={{ textDecoration: "none" }}>
                    <span>ALL</span>
                    </Link>
                </li>
                <li>
                    <AddCircleIcon className='icon'/>
                    <Link to={"/add-service"} style={{ textDecoration: "none" }}>
                    <span>CREATE</span>
                    </Link>
                </li>
                <p className='title'>REPORTS</p>
                <li>
                    <AssessmentIcon className='icon'/>
                    <Link to={"/transport-manage"} style={{ textDecoration: "none" }}/>
                    <span>Report</span>
                </li>
                <p className='bottom-title'>LOGOUT</p>
                <li>
                    <LogoutIcon className='icon'/>
                    <Link to={"/transport-manage"} style={{ textDecoration: "none" }}/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default Sidebar;