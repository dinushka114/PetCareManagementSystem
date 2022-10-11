import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

const Report = () => {

    const [pets, setPets] = useState([])
    const [filteredData, setFilteredData] = useState(pets);
    const [isLoading, setIsLoading] = useState(false)

    const id = JSON.parse(localStorage.getItem("user"))._id;

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];
        result = pets.filter((data) => {
            return data.petName.search(value) != -1;
        });
        setFilteredData(result);
    }

    const getPets = async (id) => {
        setIsLoading(true)
        await axios.get("http://localhost:3000/pet-owner/pets-by-owner/" + id)
            .then(res => {
                setPets(res.data.pets)
                setFilteredData(res.data.pets)
                setIsLoading(false)
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


    const printPDF = (id) => {
        var html = "<html>";

        var parentTr = document.getElementById(id);

        var tds = parentTr.querySelectorAll('td');

        html += "<h1 style='text-align:center;text-decoration:underline'>Pet Report</h1>"

        

        html += "</html>";

        var printWin = window.open('', '', 'left=0,top=0,width=800,height=800,toolbar=0,scrollbars=0,status  =0');
        printWin.document.write(html);
        printWin.document.close();
        printWin.focus();
        printWin.print();
        printWin.close();
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-4'>
                    <input type="text" onChange={handleSearch} className='form-control w-100' placeholder='search report' />
                </div>
                {/* <div className='col-sm-4' >
                <Link style={{ textDecoration: 'none' }} to={"/dashboard/new-pet"}> <button className='btn btn-success'><i class="fa fa-plus-circle" aria-hidden="true"></i> Add new pet</button> </Link>
            </div> */}
            </div>

            <table className='table mt-4'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Pet Name</th>
                        <th scope="col">Breed</th>
                        <th scope="col">Age</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoading ? "Loading" : filteredData.map((pet, index) => {
                            return (
                                <tr id={pet._id} key={pet._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{pet.petName}</td>
                                    <td>{pet.breed}</td>
                                    <td>{pet.age}</td>
                                    <td className='text-center'> <button onClick={() => { printPDF(pet._id) }} className='btn btn-warning'>Download PDF</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Report