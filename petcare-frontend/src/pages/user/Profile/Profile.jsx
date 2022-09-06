import React from 'react'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Swal from 'sweetalert2'
const Profile = () => {

  const [profileImg, setProfileImg] = useState('')
  const [name, setName] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [address, setAddress] = useState('')

  const [fullNameError, setFullNameError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [contactError, setContactError] = useState(false)
  const [addressError, setAddressError] = useState(false)


  const [isValid, setIsValid] = useState(false)

  const handleImageSelect = (e) => {
    setProfileImg(e.target.files[0])
  }

  const handleUpdate =async (e) => {
    e.preventDefault()
    // console.log(name.length)
    // if (name.trim().length===0) {
    //   setFullNameError(true)
    //   setIsValid(false)
    //   return
    // } else {
    //   setFullNameError(false)
    //   setIsValid(true)
    // }

    // if(isValid){
    //   alert("All right")
    // }else{
    //   alert("Wrong")
    // }

    const formData = new FormData();
    formData.append("fullName" , name)
    formData.append("contact" ,contactNo )
    formData.append("image" , profileImg)
    formData.append("address" , address)


    await axios.put("http://localhost:3000/pet-owner/update-profile/" + JSON.parse(localStorage.getItem("user"))._id , formData)
    .then(res=>{
      if(res.status==200){
        Swal.fire({
          icon: 'success',
          title: 'done',
          text: `${res.data.message}`,
        })
      }
    })
    .catch(err=>{
      Swal.fire({
        icon: 'error',
        title: 'oops..',
        text: `${err.response.data.message}`,
      })
    })
  }

  useEffect(() => {
    // setProfileImg(JSON.parse(localStorage.getItem("user")).image)
    setName(JSON.parse(localStorage.getItem("user")).fullName)
    setContactNo(JSON.parse(localStorage.getItem("user")).contact)
    setAddress(JSON.parse(localStorage.getItem("user")).address)

  })

  return (
    <div className='container-fluid mt-2'>
      <form onSubmit={handleUpdate} className='mt-2'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Profile Image</label>
          <input type="file" class="form-control" accept="image/png, image/jpeg" placeholder="Profile Image" onChange={handleImageSelect} aria-label="Profile Image" aria-describedby="basic-addon1" />
        </div>
        <div class="mb-3">
          <label for="full name" class="form-label">Full Name</label>
          <input type="text" defaultValue={name} class="form-control" onChange={e => setName(e.target.value)} id="exampleInputPassword1" />
        </div>

        <div class="mb-3">
          <label for="Contact No" class="form-label">Contact No</label>
          <input type="text" defaultValue={contactNo} onChange={e => setContactNo(e.target.value)} class="form-control" id="exampleInputPassword1" />
        </div>

        <div class="mb-3">
          <label for="Address" class="form-label">Address</label>
          {/* <input type="text" defaultValue={address} class="form-control" id="exampleInputPassword1" /> */}
          <textarea defaultValue={address} className='form-control' onChange={e => setAddress(e.target.value)} id="" cols="30" rows="5"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default Profile