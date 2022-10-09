import React, { useState } from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'
import DashBoard from "../DashBoard/DashBoard"
import Swal from 'sweetalert2'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") || false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3000/pet-owner/login", { email, password })
      .then(res => {
        // console.log(res)
        if (res.data.user) {
          localStorage.setItem("isAuth", res.data.isAuth)
          localStorage.setItem("user", JSON.stringify(res.data.user))
          localStorage.setItem("token", res.data.user.token)
          setIsAuth(true)
          window.location.href = "/dashboard/profile"
        }
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'oops..',
          text: `${err.response.data.message}`,
        })
      })

  }

  return (
    <div className='container mt-4'>
      <div class="ol-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto mt-2">
        <h1 >Login</h1>

        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" />
          </div>

          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>


        <div className='mt-4'>
          <Link to={"/register"}>don't have an account?click here to register</Link>
        </div>
      </div>
    </div>


  )
}

export default Login