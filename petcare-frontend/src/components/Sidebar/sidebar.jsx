import './sidebar.scss'
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
<div className="sidebar">
        <div className="top">
            <span className="logo">Pet Services</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className='title'>MAIN</p>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>SERVICES</p>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <span>Services</span>
                </li>
                <p className='title'>REPORTS</p>
                <li>
                    <AssessmentIcon className='icon'/>
                    <span>Report</span>
                </li>
                <p className='bottom-title'>LOGOUT</p>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default sidebar