import React, { useState } from 'react';
import './insert.css';
import image from '../../../images/add.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

const InsertBoardingPlaces = () => {

    const [boardingName,setboardingName] = useState("");
    const [boardingImage,setboardingImage] = useState("");
    const [boardingemail,setboardingemail] = useState("");
    const [boardingaddress, setboardingaddress] = useState("");
    const [boardingphone,setboardingphone] = useState("");
    const [openHoursStart,setopenHoursStart] = useState("");
    const [openHoursEnd,setopenHoursEnd] = useState("");
    const [selectedImage , setSelectedImage] = useState(null);

    const navigate = useNavigate();

    const handleImageSelect = (event)=>{
        setSelectedImage(event.target.files[0])
    }

    function sendBoarding(e){
        e.preventDefault();
    
        const newBoarding = {
            boardingName,
            boardingImage,
            boardingemail,
            boardingaddress,
            boardingphone,
            openHoursStart,
            openHoursEnd
        }

        const formData = new FormData();
        formData.append('boardingName' , boardingName)
        formData.append('boardingImage' , selectedImage)
        formData.append('boardingemail' , boardingemail)
        formData.append('boardingaddress' , boardingaddress)
        formData.append('boardingphone' , boardingphone)
        formData.append('openHoursStart' , openHoursStart)
        formData.append('openHoursEnd' , openHoursEnd)
        
        console.log(formData)


        axios.post("http://localhost:3000/pet-boarding/add",formData).then(()=>{
            Swal.fire("Boarding added");
            navigate('/');
        }).catch((err)=>{
            alert(err);
            console.log(err);
        })    
    }

  return (
    
    <div className="home">
    <div className="homeContainer">
        <h1>Add New Pet Boarding Places</h1>
            <form className='border border-success rounded' encType='multipart/form-data' onSubmit={sendBoarding}>
                <div className='p-4'>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label htmlFor="boardingName">Pet boarding place name</label>
                            <input  name="boardingName" id="boardingName"  cols="10" rows="4" className='form-control'
                                type="text" placeholder="Pet Care" required
                                onChange={(e)=>{
                                    setboardingName(e.target.value);
                                }}/>
                        </div>
                    </div>
                    
                    <img src={image} alt='add' style={{width:'45%',float:'right'}}></img>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="boardingImage">Pet boarding place image</label>
                                <input type='file' name="boardingImage" id="boardingImage"  cols="10" rows="4" className='form-control'
                                    onChange={handleImageSelect}/>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label htmlFor="boardingemail">Pet boarding place email</label>
                            <input  name="boardingemail" id="boardingemail"  cols="10" rows="4" className='form-control' 
                                type="email" required placeholder="petcare@gmail.com"
                                onChange={(e)=>{
                                    setboardingemail(e.target.value);
                                }}></input>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label htmlFor="boardingaddress">Pet boarding place city</label>
                            <input  name="boardingaddress" id="boardingaddress"  cols="10" rows="4" className='form-control'
                                type="text" required placeholder="Nugegoda"
                            onChange={(e)=>{
                                setboardingaddress(e.target.value);
                            }}></input>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className="form-group">
                            <label htmlFor="boardingphone">Pet boarding place phone no</label>
                            <input type="text" name="boardingphone" id="boardingphone" cols="10" rows="4" className='form-control'
                                pattern="[0][0-9]{9}" required placeholder="0110987654"
                            onChange={(e)=>{
                                setboardingphone(e.target.value);
                            }}/>
                        </div>
                    </div>
                    <div className='row'>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="openHours">Open hours</label>
                                    <input type='time' name="openHoursStart" id="openHoursStart" cols="10" rows="4" className='form-control' placeholder='Start Time'
                                    onChange={(e)=>{
                                        setopenHoursStart(e.target.value);
                                    }} />
                                </div>
                            </div> 
                            <div className='col-sm-5'>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"></label>
                                    <input type='time' name="openHoursEnd" id="openHoursEnd" cols="10" rows="4" className='form-control' placeholder='End Time'
                                    onChange={(e)=>{
                                        setopenHoursEnd(e.target.value);
                                    }} />
                                </div>
                            </div>              
                            </div>         
                       <br/>
                       <div className='row'>
                                <div className='col-sm-2'>
                                    <input type="submit" name='Save' value='Save' className='btn btn-success'></input> 
                                </div>
                                <div className='col-sm-2'>
                                    <input type="submit" name='Clear' value='Clear' className='btn btn-danger' ></input>
                                </div>
                        </div>
                </div>
            </form>
            <br/>
    </div>
</div>

  )
 
}

export default InsertBoardingPlaces;
