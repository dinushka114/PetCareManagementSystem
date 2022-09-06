import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'

const NewPet = () => {

    const { id } = useParams();

    const [ pet , setPet] = useState({
        name:"",
        breed:"",
        age:""
    })

    const getPetData = async (id) => {
        await axios.get("http://localhost:3000/pet-owner/get-pet/"+id)
        .then(res=>{
            setPet({
                name:res.data.pet.petName,
                breed:res.data.pet.breed,
                age:res.data.pet.age
            })
        })
    }

    const updatePet= async(id)=>{
        // await axios.put()
    }

    useEffect(() => {
        if(id){
            getPetData(id)
        }
    })


    const [petName, setPetName] = useState('')
    const [petBreed, setPetBreed] = useState('')
    const [petAge, setPetAge] = useState('')

    const [petNameError, setPetNameError] = useState(false)
    const [petBreedError, setPetBreedError] = useState(false)
    const [petAgeError, setPetAgeError] = useState(false)
    const [petAgeValid, setPetAgeValid] = useState(true)

    const [isValid, setIsValid] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!petName || petName.trim().length == 0) {
            setPetNameError(true)
            setIsValid(false)
        } else {
            setPetNameError(false)

        }

        if (!petBreed || petBreed.trim().length == 0) {
            setPetBreedError(true)
            setIsValid(false)
        } else {
            setPetBreedError(false)

        }

        if (!petAge || petAge.trim().length == 0) {
            setPetAgeError(true)
            setIsValid(false)
        } else {
            setPetAgeError(false)

        }

        if (!isNaN(petAge)) {
            setPetAgeValid(true)
            setIsValid(true)
        } else {
            setPetAgeValid(false)
            setIsValid(false)
        }


        if (isValid) {
            // alert("submitted")
            await axios.post("http://localhost:3000/pet-owner/add-pet/" + JSON.parse(localStorage.getItem("user"))._id, { petName: petName, breed: petBreed, age: petAge })
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'done',
                        text: `${res.data.message}`,
                    })
                })

                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'done',
                        text: `${err.response.data.message}`,
                    })
                })
        }


    }


    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="pet name" class="form-label">Pet Name</label>
                    <input type="text" defaultValue={id ? pet.name : null} class="form-control" id="pet name" onChange={(e) => setPetName(e.target.value)} />
                </div>
                {
                    petNameError ? <p className='text-danger'>Pet name is required</p> : null
                }
                <div class="mb-3">
                    <label for="breed" class="form-label">Breed</label>
                    <input type="text" class="form-control" defaultValue={id ? pet.breed : null} onChange={(e) => setPetBreed(e.target.value)} id="exampleInputPassword1" />
                </div>
                {
                    petBreedError ? <p className='text-danger'>Pet breed is required</p> : null
                }


                <div className='row'>
                    <div className='col-sm-6'>
                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="text" class="form-control" defaultValue={id ? pet.age : null} id="exampleInputPassword1" onChange={(e) => setPetAge(e.target.value)} />
                        </div>

                        {
                            petAgeError ? <p className='text-danger'>Pet Age is required</p> : null
                        }

                        {
                            !petAgeValid ? <p className='text-danger'>Pet Age must be a number</p> : null
                        }

                    </div>
                    <div className='col-sm-6' style={{ marginTop: '30px' }}>
                        <button type="submit" class="btn btn-success"> {id ? "Update" : "Submit"} </button>
                        <button type="reset" style={{ marginLeft: '10px' }} class="btn btn-danger">Reset</button>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default NewPet