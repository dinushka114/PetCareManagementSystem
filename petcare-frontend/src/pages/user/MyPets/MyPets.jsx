import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

const MyPets = () => {

    const [pets, setPets] = useState([])

    const id = JSON.parse(localStorage.getItem("user"))._id;

    const getPets = async (id) => {
        await axios.get("http://localhost:3000/pet-owner/pets-by-owner/" + id)
            .then(res => {
                setPets(res.data.pets)
            })

    }

    const deletePet = async (pet_id) => {
        if (window.confirm("Are you sure?")) {
            await axios.delete("http://localhost:3000/pet-owner/delete-pet/" + pet_id + "/" + id)
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'done',
                        text: `${res.data.message}`,
                    })
                    getPets(id);
                })

                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'oops',
                        text: `${err.response.data.message}`,
                    })
                })
        }
    }

    useEffect(() => {
        getPets(id);
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4'>
                    <input type="text" className='form-control w-100' placeholder='search pet' />
                </div>
                <div className='col-sm-4' >
                    <Link style={{ textDecoration: 'none' }} to={"/dashboard/new-pet"}> <button className='btn btn-success'><i class="fa fa-plus-circle" aria-hidden="true"></i> Add new pet</button> </Link>
                </div>
            </div>

            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pet Name</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Age</th>
                        <th scope='col'>Update</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, index) => {
                            return (
                                <tr key={pet._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{pet.petName}</td>
                                    <td>{pet.breed}</td>
                                    <td>{pet.age}</td>
                                    <td> <Link to={`/dashboard/new-pet/${pet._id}`}><button className='btn btn-warning'>Update</button></Link> </td>
                                    <td> <button onClick={() => deletePet(pet._id)} className='btn btn-danger'>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default MyPets