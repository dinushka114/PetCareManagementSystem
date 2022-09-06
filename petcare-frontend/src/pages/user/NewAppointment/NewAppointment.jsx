import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

const NewAppointment = () => {

  const id = JSON.parse(localStorage.getItem("user"))._id;

  const [petName, setPetName] = useState('')
  const [service, setService] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const [pets, setPets] = useState([])
  const [services, setServices] = useState([])

  const handleSelectPet = (e) => {
    setPetName(e.target.value)
  }


  const handleSelectService = (e) => {
    setService(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:3000/pet-owner/new-appointment/" + id, { pet: petName, service: service, date: date, time: time })
      .then(result => {
        Swal.fire({
          icon: 'success',
          title: 'done',
          text: `${result.data.message}`,
        })
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'oops',
          text: `${err.response.data.message}`,
        })
      })

  }



  const getPetsByowner = async (id) => {
    await axios.get("http://localhost:3000/pet-owner/pets-by-owner/" + id)
      .then(res => {
        setPets(res.data.pets)
      })
  }

  const getPetServices = async () => {
    await axios.get("http://localhost:3000/pet-service/get-service")
      .then(res => {
        setServices(res.data.result)
      })
  }

  useEffect(() => {
    getPetsByowner(id);
    getPetServices()
  }, [])

  return (
    <div className='container-fluid'>
      <h2>Make an appointment</h2>
      <form action="" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="pet name" class="form-label">Pet Name</label>
          <select className='form-control' name="" id="" onChange={handleSelectPet}>
            <option >select a pet</option>
            {
              pets.map(pet => {
                return (<option value={pet._id}>{pet.petName}</option>)
              })
            }
          </select>
        </div>

        <div class="mb-3">
          <label for="pet name" class="form-label">Services</label>
          <select className='form-control' name="" id="" onChange={handleSelectService}>
            <option>select a service</option>
            {
              services.map(service => {
                return (<option value={service._id}>{service.serviceName}</option>)
              })
            }
          </select>
        </div>


        <div className='row'>
          <div className='col-sm-6'>
            <div class="mb-3">
              <label for="pet name" class="form-label">Date</label>
              <input type="date" onChange={(e) => setDate(e.target.value)} className='form-control' />
            </div>
          </div>
          <div className='col-sm-6'>
            <div class="mb-3">
              <label for="pet name" class="form-label">Time</label>
              <input type="time" onChange={(e) => setTime(e.target.value)} className='form-control' />
            </div>
          </div>
        </div>

        <div class="mb-3">

          <input type="submit" value="Submit" className="btn btn-success" />
          <input type="reset" style={{ marginLeft: '10px' }} value="Clear" className="btn btn-danger" />

        </div>


      </form>
    </div>
  )
}

export default NewAppointment