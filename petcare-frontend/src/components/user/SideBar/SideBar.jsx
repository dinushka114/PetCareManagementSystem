import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./SideBar.css"

const SideBar = () => {

  const navigatae = useNavigate();

  const signOut = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("isAuth")
    localStorage.removeItem("token")
    navigatae(0);
  }

  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">Pet Care</div>
      <div className="list-group list-group-flush">


        <Link style={{ textDecoration: 'none' }} to={'/dashboard/profile'}><a className="list-group-item list-group-item-action list-group-item-light p-3">My Profile</a></Link>



        <Link style={{ textDecoration: 'none' }} to={'/dashboard/new-appointment'}><a className="list-group-item list-group-item-action list-group-item-light p-3">Add New Appointment</a></Link>
        <Link style={{ textDecoration: 'none' }} to={'/dashboard/my-appointments'}><a className="list-group-item list-group-item-action list-group-item-light p-3">My Appointments</a></Link>
        <Link style={{ textDecoration: 'none' }} to={'/dashboard/pets'}><a className="list-group-item list-group-item-action list-group-item-light p-3">My Pets</a></Link>

        {/* <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/dashboard/my-appointments">My Appointments</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/dashboard/my-pets">My Pets</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Reports</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a> */}
        <div className='text-center'>
          <button className='btn btn-danger' onClick={() => signOut()} style={{ position: 'absolute', bottom: '0px' }}>Sign out</button>
        </div>
      </div>
    </div>

  )
}

export default SideBar