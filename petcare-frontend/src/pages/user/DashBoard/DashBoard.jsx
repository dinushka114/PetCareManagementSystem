import React from 'react'
import {useLocation , Routes , Route , useMatch} from "react-router-dom"
import Profile from '../../../components/user/ContentArea/Profile'
import NavBar from '../../../components/user/NavBar/NavBar'
import SideBar from '../../../components/user/SideBar/SideBar'
import "../../../styles/styles.css"
import NewAppointment from '../NewAppointment/NewAppointment'


const DashBoard = () => {

const path = useLocation().pathname;
console.log(path)

  return (
    <div className="d-flex" id="wrapper">
      <SideBar />
      <div id="page-content-wrapper">
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path={`/profile`} element={<Profile />}></Route>
            <Route path={`/new-appointment`} element={<NewAppointment />}></Route>
          </Routes>

        </div>
      </div>
    </div>
  )
}

export default DashBoard