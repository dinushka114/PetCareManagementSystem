import React from 'react';
import './insert.css';
import image from '../../../images/update.jpg';
import { Component } from 'react';

export default class insertBoardingPlaces extends Component{
    render(){
        return (
            
            <div className="home">
            <div className="homeContainer">
                <h1>Update Pet Boarding Places</h1>
                
                    <form className='border border-success rounded'>
                
                        <div className='p-4'>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="boardingname">Pet boarding place name</label>
                                    <input  name="boardingname" id=""  cols="10" rows="4" className='form-control'></input>
                                    <p className="text-danger p-1">   
                                    </p>
                                </div>
                            </div>
                            
                            <img src={image} alt='add' style={{width:'45%',float:'right'}}></img>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label htmlFor="boardingimage">Pet boarding place image</label>
                                        <input type='file' accept="image/png, image/jpeg" name="boardingimage" id=""  cols="10" rows="4" className='form-control'></input>
                                        <p className="text-danger p-1">  
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="boardingemail">Pet boarding place email</label>
                                    <input  name="boardingemail" id=""  cols="10" rows="4" className='form-control' type="email" required></input>
                                    <p className="text-danger p-1">   
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="boardingaddress">Pet boarding place address</label>
                                    <input  name="boardingaddress" id=""  cols="10" rows="4" className='form-control'  type="text" required></input>
                                    <p className="text-danger p-1">   
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="contactno">Pet boarding place phone no</label>
                                    <input type="text" name="contactno" id="" cols="10" rows="4" className='form-control'  pattern="[0][0-9]{9}" required></input>
                                    <p className="text-danger p-1">
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className="form-group">
                                            <label htmlFor="openHours">Open hours</label>
                                            <input type='time' name="openHoursStart" id="openHoursStart" cols="10" rows="4" className='form-control' placeholder='Start Time'/>
                                        </div>
                                    </div> 
                                    <div className='col-sm-5'>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1"></label>
                                            <input type='time' name="openHoursEnd" id="openHoursEnd" cols="10" rows="4" className='form-control' placeholder='End Time'/>
                                        </div>
                                    </div>              
                                    </div>  
                            <br/>
                            <div className='row'>
                                        <div className='col-sm-1'>
                                            <input type="submit" name='Save' value='Update' className='btn btn-success'></input> 
                                        </div>
                                        <div className='col-sm-2'>
                                            <input type="submit" name='Save' value='Clear' className='btn btn-danger' ></input>
                                        </div>
                                </div>
                        </div>
                    </form>
                    <br/>
            </div>
        </div>
        )
    }
}
