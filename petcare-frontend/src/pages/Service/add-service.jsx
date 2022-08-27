import React from 'react'
import './services.scss'

const Service = () => {
  return (
    <div className="home">
        <div className="homeContainer">
            <h1>Add New Service</h1>
                <form className='border border-success rounded'>
                    <div className='p-4'>
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <label htmlFor="serviceName">Service name</label>
                                <input  name="serviceName" id=""  cols="10" rows="4" className='form-control'></input>
                                <p className="text-danger p-1">   
                                </p>
                            </div>
                        </div>
                        <img src='https://media.istockphoto.com/vectors/veterinary-office-vector-illustration-vector-id1203744384?k=20&m=1203744384&s=612x612&w=0&h=yJaYAjPSonGdmoKOthsBdtx2mHpVl4O3e3MHlxWbRJ4='></img>
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <div className="form-group">
                                    <label htmlFor="serviceImage">Service image</label>
                                    <input type='file' accept="image/png, image/jpeg" name="serviceImage" id=""  cols="10" rows="4" className='form-control'></input>
                                    <p className="text-danger p-1">  
                                    </p>
                                </div>
                                </div>
                            </div>
                        <div className='col-sm-6'>
                                <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className='form-control' name="description" id=""  rows="4" className='form-control'></textarea>
                                <p className="text-danger p-1">
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <label htmlFor="contactNo">Contact no</label>
                                <input type="text" name="contactNo" id="" cols="10" rows="4" className='form-control'></input>
                                <p className="text-danger p-1">
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <label htmlFor="openHours">Open hours</label>
                                <input type='time' name="openHoursStart" id="" cols="10" rows="4" className='form-control' placeholder='Start Time'></input>
                                <p className="text-danger p-1">
                                </p>
                            </div>
                        </div> 
                        <div className='col-sm-5'>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"></label>
                                <input type='time' name="openHoursEnd" id="" cols="10" rows="4" className='form-control' placeholder='End Time'></input>
                                <p className="text-danger p-1">
                                </p>
                            </div>
                        </div>              
                        </div>         
                        <div className='row'>
                            <div className='col-sm-6'>
                                <input type="submit" name='submit' className='btn btn-primary' />
                            </div>
                        </div>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Service