import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import RegisterImage from "../../../assets/images/register.png"

const Register = () => {

  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [isAgree, setIsAgree] = useState(false)


  const [fullNameError, setFullNameError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [contactError, setContactError] = useState(false)
  const [contactLengthError, setContactLengthError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)
  const [passwordSameError, setPasswordSameError] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || fullName.length <= 0) {
      setFullNameError(true)
      setIsValid(false)
      return
    } else {
      setFullNameError(false)
      setIsValid(true)
    }

    if (!username || username.length <= 0) {
      setUsernameError(true)
      setIsValid(false)
      return
    } else {
      setUsernameError(false)
      setIsValid(true)
    }

    if (!image || image.length <= 0) {
      setImageError(true)
      setIsValid(false)
      return
    } else {
      setImageError(false)
      setIsValid(true)
    }

    if (!email || email.length <= 0) {
      setEmailError(true)
      setIsValid(false)
      return
    } else {
      setEmailError(false)
      setIsValid(true)
    }

    if (!contact) {
      setContactError(true)
      setIsValid(false)
      return
    } else {
      setContactError(false)
      setIsValid(true)
    }

    if (contact.length != 10 || isNaN(contact)) {
      setContactLengthError(true)
      setIsValid(false)
      return
    } else {
      setContactLengthError(false)
      setIsValid(true)
    }

    if (!address || address.length <= 0) {
      setAddressError(true)
      setIsValid(false)
      return
    } else {
      setAddressError(false)
      setIsValid(true)
    }

    if (!password || address.length <= 0) {
      setPasswordError(true)
      setIsValid(false)
      return
    } else {
      setPasswordError(false)
      setIsValid(true)
    }

    if (!confirmpassword || confirmpassword.length <= 0) {
      setConfirmPasswordError(true)
      setIsValid(false)
      return
    } else {
      setConfirmPasswordError(false)
      setIsValid(true)
    }

    if (password !== confirmpassword) {
      setPasswordSameError(true)
      setIsValid(false)
      return
    } else {
      setPasswordSameError(false)
      setIsValid(true)
    }

    if (isValid) {

      const formData = new FormData()
      formData.append("fullName", fullName)
      formData.append("email", email)
      formData.append("address", address)
      formData.append("username", username)
      formData.append("password", password)
      formData.append("image", image)
      formData.append("contact", contact)


      await axios.post("http://localhost:3000/pet-owner/register", formData)
        .then(res => {
          console.log(res.data)
          
          Swal.fire({
            icon: 'success',
            title: 'done',
            text: `${res.data.message}`,
          })

        })
        .catch(err => {
          console.log(err)

          Swal.fire({
            icon: 'error',
            title: 'oops..',
            text: `${err.response.data.message}`,
          })
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }

  }

  const handleImageSelect = (e) => {
    setImage(e.target.files[0])
  }

  const handleCheck = () => {
    setIsAgree(!isAgree)
  }


  return (
    <div className='container'>
      <h1 className='m-2'>Register</h1>

      <div className='row'>
        <div className='col-sm-6'>
          <form action="" className='form-control mt-4' onSubmit={handleSubmit}>
            <h1>Create Account</h1>

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
              <input type="text" class="form-control" placeholder="Full name" aria-label="Full Name" onChange={(e) => setFullName(e.target.value)} aria-describedby="basic-addon1" />
            </div>

            {
              fullNameError ? <p className='text-danger'>Full Name is required</p> : null
            }

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-user"></i></span>
              <input type="text" class="form-control" placeholder="Username" aria-label="Username" onChange={(e) => setUsername(e.target.value)} aria-describedby="basic-addon1" />
            </div>

            {
              usernameError ? <p className='text-danger'>Username is required</p> : null
            }

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope-o"></i></span>
              <input type="email" class="form-control" placeholder="Email" aria-label="Email" onChange={(e) => setEmail(e.target.value)} aria-describedby="basic-addon1" />
            </div>

            {
              emailError ? <p className='text-danger'>Email is required</p> : null
            }

            <div class="input-group mb-3">
              <input type="file" class="form-control" accept="image/png, image/jpeg" placeholder="Profile Image" aria-label="Profile Image" onChange={handleImageSelect} aria-describedby="basic-addon1" />
            </div>

            {
              imageError ? <p className='text-danger'>Profile image is required</p> : null
            }

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-mobile"></i></span>
              <input type="text" class="form-control" placeholder="Contact No" aria-label="Contact" onChange={(e) => setContact(e.target.value)} aria-describedby="basic-addon1" />
            </div>

            {
              contactError ? <p className='text-danger'>Contact no is required</p> : null
            }

            {
              contactLengthError ? <p className='text-danger'>Please enter valid phone number</p> : null
            }

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-address-book-o"></i></span>
              <input type="text" class="form-control" placeholder="Address" aria-label="Address" onChange={(e) => setAddress(e.target.value)} aria-describedby="basic-addon1" />
            </div>


            {
              addressError ? <p className='text-danger'>Address is required</p> : null
            }

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-key"></i></span>
              <input type="password" class="form-control" placeholder="Password" aria-label="Password" onChange={(e) => setPassword(e.target.value)} aria-describedby="basic-addon1" />
            </div>


            {
              passwordError ? <p className='text-danger'>Password is required</p> : null
            }

            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="fa fa-key"></i></span>
              <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Password" onChange={(e) => setConfirmPassword(e.target.value)} aria-describedby="basic-addon1" />
            </div>

            {
              confirmPasswordError ? <p className='text-danger'>Confirm password is required</p> : null
            }

            {
              passwordSameError ? <p className='text-danger'>Password and confirm password must be same</p> : null
            }

            <div class="form-check">
              <input class="form-check-input" type="checkbox" onChange={handleCheck} id="flexCheckDefault" />
              <label class="form-check-label" for="flexCheckDefault">
                I agree with terms and conditions
              </label>
            </div>

            {
              !isAgree ? <p className='text-danger'>user must agree with our terms and conditions</p> : null
            }

            <div className='text-center mt-2'>
              <input type="submit" value={"SIGN UP"} className="btn btn-success" />
            </div>

            <div className='text-center mt-2'>
              <Link to={"/login"}>Already have an account?</Link>
            </div>


          </form>
        </div>
        <div className='col-sm-6'>
          <img src={RegisterImage} alt="" srcSet="" />
        </div>
      </div>

    </div>
  )
}

export default Register