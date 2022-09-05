import React from 'react'
import "./SideBar.css"

const SideBar = () => {
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading border-bottom bg-light">Pet Care</div>
      <div className="list-group list-group-flush">
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/dashboard/profile">My Profile</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/dashboard/new-appointment">Add New Appointment</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/dashboard/my-appointments">My Appointments</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="/dashboard/my-pets">My Pets</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Reports</a>
        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Status</a>
      </div>
    </div>

  )
}

export default SideBar