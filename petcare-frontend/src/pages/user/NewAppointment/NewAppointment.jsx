import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const NewAppointment = () => {

  const [petName, setPetName] = useState('')
  const [pets, setPets] = useState([])


  const id = JSON.parse(localStorage.getItem("user"))._id;

  const getPetsByowner = async (id) => {
    await axios.get("http://localhost:3000/pet-owner/pets-by-owner/" + id)
      .then(res => {
        setPets(res.data.pets)
      })
  }

  useEffect(() => {
    getPetsByowner(id);
  }, [])

  return (
    <div className='container-fluid'>
      <h2>Make an appointment</h2>
      <form action="">
        <div class="mb-3">
          <label for="pet name" class="form-label">Pet Name</label>
          <select className='form-control' name="" id="">
            {
              pets.map(pet=>{
                return ( <option value={''}>{pet.petName}</option> )
              })
            }
          </select>
        </div>
      </form>
    </div>
  )
}

export default NewAppointment