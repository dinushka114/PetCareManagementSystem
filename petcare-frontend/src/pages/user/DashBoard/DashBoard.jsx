import React, { useState, useEffect } from 'react'
import { useLocation, Routes, Route, useMatch, Navigate } from "react-router-dom"
import NavBar from '../../../components/user/NavBar/NavBar'
import SideBar from '../../../components/user/SideBar/SideBar'
import "../../../styles/styles.css"
import MyAppointments from '../MyAppointments/MyAppointments'
import MyPets from '../MyPets/MyPets'
import NewAppointment from '../NewAppointment/NewAppointment'
import NewPet from '../NewPet/NewPet'
import Profile from '../Profile/Profile'


const DashBoard = () => {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("isAuth");
    if (loggedInUser) {
      setIsAuth(true)
    }
  }, [])

  if (!isAuth) {
    return (<Navigate replace to={"/login"} />)
  } else {
    return (
      <div className="d-flex" id="wrapper">
        <SideBar />
        <div id="page-content-wrapper">
          <NavBar />
          <div className="container-fluid">
            <Routes>
              <Route path={`/profile`} element={<Profile />}></Route>
              <Route path={`/new-appointment`} element={<NewAppointment />}></Route>
              <Route path={`/new-appointment/:id`} element={<NewAppointment />}></Route>
              <Route path={`/my-appointments`} element={<MyAppointments />}></Route>
              <Route path={`/new-pet`} element={<NewPet />}></Route>
              <Route path={`/pets`} element={<MyPets />}></Route>
              <Route path={`/new-pet/:id`} element={<NewPet />}></Route>
            </Routes>

          </div>
        </div>
      </div>
    )
  }


}

export default DashBoard