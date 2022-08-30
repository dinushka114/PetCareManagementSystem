import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './insert.css';
import image from '../../../images/add.jpg';

const insertBoardingPlaces = () => {
  return (
    
    <div className="home">
    <div className="homeContainer">
        <h1>Add New Pet Boarding Places</h1>
        
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
                            <input  name="boardingemail" id=""  cols="10" rows="4" className='form-control'></input>
                            <p className="text-danger p-1">   
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label htmlFor="boardingaddress">Pet boarding place address</label>
                            <input  name="boardingaddress" id=""  cols="10" rows="4" className='form-control'></input>
                            <p className="text-danger p-1">   
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label htmlFor="contactno">Pet boarding place phone no</label>
                            <input type="text" name="contactno" id="" cols="10" rows="4" className='form-control'></input>
                            <p className="text-danger p-1">
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label htmlFor="openhours">Pet boarding place open hours</label>
                            <DropdownButton variant="secondary" id="dropdown-basic" title="Open Hours">
                                <Dropdown.Item href="#/action-1">8AM-6PM</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">6PM-8AM</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div> 
                       <br/>
                       <Badge bg="success" style={{fontSize: 18}}>Save</Badge> 
                       <Badge bg="danger" style={{fontSize: 18}}>Clear</Badge>
                </div>
            </form>
            <br/>
    </div>
</div>
  )
}

export default insertBoardingPlaces;
