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


  const [petSelectError, setPetSelectError] = useState(false)
  const [serviceSelectError, setServiceSelectError] = useState(false)

  const handleSelectPet = (e) => {
    if (e.target.value.indexOf(" ") > 0) {
      setPetSelectError(true)
      return
    }
    setPetName(e.target.value)
    setPetSelectError(false)
  }


  const handleSelectService = (e) => {
    if (e.target.value.indexOf(" ") > 0) {
      setServiceSelectError(true)
      return
    }
    setService(e.target.value)
    setServiceSelectError(false)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!petSelectError && !serviceSelectError && time && date) {
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

        {
          petSelectError ? <p className='text-danger'>Please select a pet</p> : null
        }

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

        {
          serviceSelectError ? <p className='text-danger'>Please select a service</p> : null
        }

        <div className='row'>
          <div className='col-sm-6'>
            <div class="mb-3">
              <label for="pet name" class="form-label">Date</label>
              <input type="date" onChange={(e) => setDate(e.target.value)} className='form-control' />
            </div>

            {
              !date ? <p className='text-danger'>Please select a appointment date</p> : null
            }

          </div>
          <div className='col-sm-6'>
            <div class="mb-3">
              <label for="pet name" class="form-label">Time</label>
              <input type="time" onChange={(e) => setTime(e.target.value)} className='form-control' />
            </div>
            {
              !time ? <p className='text-danger'>Please select a appointment time</p> : null
            }
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