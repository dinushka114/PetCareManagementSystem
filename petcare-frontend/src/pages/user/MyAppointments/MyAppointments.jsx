import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    const [filteredData, setFilteredData] = useState(appointments);
    const [isLoading, setIsLoading] = useState(false)

    const id = JSON.parse(localStorage.getItem("user"))._id;

    const getAppointments = async (id) => {
        setIsLoading(true)
        await axios.get("http://localhost:3000/pet-owner/my-appointments/" + id)
            .then(result => {
                setAppointments(result.data.result)
                setFilteredData(result.data.result)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getAppointments(id)

    }, [])


    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        result = appointments.filter((data) => {
            return (data.service.serviceName.search(value) != -1 || data.petName.petName.search(value) != -1);
        });

        setFilteredData(result);
    }

    const deleteAppointment = async (id) => {
        if (window.confirm("Are you sure")) {
            await axios.delete("http://localhost:3000/pet-owner/delete-appointment/" + id)
                .then(res => {
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4'>
                    <input type="text" onChange={handleSearch} className='form-control w-100' placeholder='search appointment' />
                </div>

            </div>

            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pet Name</th>
                        <th scope="col">Date</th>
                        <th scope='col'>Time</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Update</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? "Loading" : filteredData.map((appointment, index) => {
                            return (
                                <tr key={appointment._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{appointment.service.serviceName}</td>
                                    <td>{appointment.petName.petName}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.time}</td>
                                    <td>{appointment.status}</td>
                                    <td> <Link to={`/dashboard/new-appointment/${appointment._id}`}><button className='btn btn-warning'>Update</button></Link> </td>
                                    <td> <button onClick={() => deleteAppointment(appointment._id)} className='btn btn-danger'>Delete</button> </td>
                                </tr>
                            )
                            // return (
                            //     appointment.service ? <>
                            //         <tr key={appointment._id}>
                            //             <th scope="row">{index + 1}</th>
                            //             <td>{appointment.service.serviceName}</td>
                            //             <td>{appointment.petName.petName}</td>
                            //             <td>{appointment.date}</td>
                            //             <td>{appointment.time}</td>
                            //             <td>{appointment.status}</td>
                            //             <td> <Link to={`/dashboard/new-pet/${appointment._id}`}><button className='btn btn-warning'>Update</button></Link> </td>
                            //             <td> <button className='btn btn-danger'>Delete</button> </td>
                            //         </tr>
                            //     </> : <p className='text-danger p-4'>Service data not found..</p>
                            // )
                        })
                    }

                </tbody>
            </table>



        </div>
    )
}

export default MyAppointments