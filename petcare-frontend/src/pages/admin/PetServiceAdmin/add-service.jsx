import React from 'react'
import './services.scss'
import Sidebar from '../../../components/admin/Sidebar/sidebar'
import { Formik, Form, Field } from "formik";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
import Swal from 'sweetalert2';
import { Input } from '@mui/material';
import * as yup from "yup";

export default function AddService(){
    const [serviceName,setserviceName] = useState("");
    const [serviceImage,setserviceImage] = useState("");
    const [description,setdescription] = useState("");
    const [contactNo,setcontactNo] = useState("");
    const [openHoursStart,setopenHoursStart] = useState("");
    const [openHoursEnd,setopenHoursEnd] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);


    const initialValues = {
        serviceName:"",
        serviceImage:"",
        description:"",
        contactNo:"",
        openHoursStart:"",
        openHoursEnd:""
    }

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
      }

    function sendService(e){
        e.preventDefault();
    
        const newService = {
            serviceName,
            serviceImage,
            description,
            contactNo,
            openHoursStart,
            openHoursEnd
        }
    

        const formData = new FormData();
        formData.append('serviceName' , serviceName)
        formData.append('serviceImage' , selectedFile)
        formData.append('description' , description)
        formData.append('contactNo' , contactNo)
        formData.append('openHoursStart' , openHoursStart)
        formData.append('openHoursEnd' , openHoursEnd)

        console.log(formData)

        axios.post("http://localhost:3000/pet-service/add-service",formData).then(()=>{
            Swal.fire("Service added")
        }).catch((err)=>{
            console.log(err)
        })
    }


    const validationSchema = yup.object({
        serviceName:yup.string().required("Service Name is required!"),
        serviceImage:yup.string().required("Service Image is required!"),
        description:yup.string().required("Description is required!"),
        contactNo:yup.string().required("Contact No is required!"),
        openHoursStart:yup.string().required("Open hours is required!"),
        openHoursEnd:yup.string().required("End Hours is required!")
    });

return(
    <Formik
    validationSchema={validationSchema}
    initialValues={initialValues}
>
    {(ServiceAddForm) => {
    return (
        <div className="home">
            <div className="homeContainer">
                <h1>Add New Service</h1>
                    <form  onSubmit={sendService} className='border border-success rounded was-validated' encType='multipart/form-data'>
                        <div className='p-4'>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="serviceName">Service name</label>
                                    <input  name="serviceName" id="serviceName"  cols="10" rows="4" className='form-control' required
                                    onChange={(e)=>{

                                        setserviceName(e.target.value);
                                    }}
                                 
                                    //ServiceAddForm.handleChange();
                                    />
                                     <div class="invalid-feedback">Please enter the service name</div>
                                 
                       
                                                <p className="text-danger p-1">
                                                    {ServiceAddForm.errors.serviceName}
                                                </p>
              
                                </div>
                            </div>
                            <img src='https://media.istockphoto.com/vectors/veterinary-office-vector-illustration-vector-id1203744384?k=20&m=1203744384&s=612x612&w=0&h=yJaYAjPSonGdmoKOthsBdtx2mHpVl4O3e3MHlxWbRJ4='></img>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label htmlFor="serviceImage">Service image</label>
                                        <input type='file'  name="serviceImage" id="serviceImage"  cols="10" rows="4" className='form-control' required
                                       onChange={handleFileSelect}
                                       />
                                    <div class="invalid-feedback">Please upload the service image</div>
                                    </div>
                                    </div>
                                </div>
                            <div className='col-sm-6'>
                                    <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea name="description" id="description"  rows="4" className='form-control' required
                                    onChange={(e)=>{
                                        setdescription(e.target.value);
                                    }} />
                                    <div class="invalid-feedback">Please enter the service description</div>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="contactNo">Contact no</label>
                                    <input type="text" name="contactNo" id="contactNo" cols="10" rows="4" className='form-control' required
                                    pattern="[0][0-9]{9}" required 
                                    onChange={(e)=>{
                                        setcontactNo(e.target.value);
                                    }} />
                                    <div class="invalid-feedback">Please enter valid contact number</div>
                                </div>
                            </div>
                            <div className='row'>
                            <div className='col-sm-6'>
                                <div className="form-group">
                                    <label htmlFor="openHours">Open hours</label>
                                    <input type='time' name="openHoursStart" id="openHoursStart" cols="10" rows="4" className='form-control' placeholder='Start Time' required
                                    onChange={(e)=>{
                                        setopenHoursStart(e.target.value);
                                    }} />
                                    <div class="invalid-feedback">Please enter the starting time</div>
                                </div>
                            </div> 
                            <div className='col-sm-5'>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1"></label>
                                    <input type='time' name="openHoursEnd" id="openHoursEnd" cols="10" rows="4" className='form-control' placeholder='End Time' required
                                    onChange={(e)=>{
                                        setopenHoursEnd(e.target.value);
                                    }} />
                                    <div class="invalid-feedback">Please enter the close time</div>
                                </div>
                            </div>              
                            </div>         
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <input type="submit" name='submit' className='btn btn-primary' />
                                </div>
                                <div className='col-sm-2'>
                                    <input type="reset" name='Clear' value='Reset' className='btn btn-success'></input>
                                </div>
                            </div>
                        </div>
                    </form>
            </div>
        </div>
      )}}
      </Formik>
)
}

    
