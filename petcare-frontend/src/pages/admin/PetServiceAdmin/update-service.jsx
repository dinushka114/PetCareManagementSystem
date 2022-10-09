import React, { useState, useEffect } from 'react'
// import './services.scss';
//import image from '../../../images/update.jpg';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik, validateYupSchema } from 'formik';
import validator from 'validator'

const UpdateService = () =>{

    const { id } = useParams();
    const [service, setService] = useState({
        serviceName: "",
        serviceImage:"",
        description: "",
        contactNo: "",
        openHoursStart: "",
        openHoursEnd: ""
    });

    console.log(id);
    const [serviceName,setserviceName] = useState("");
    const [serviceImage,setserviceImage] = useState("");
    const [description,setdescription] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [openHoursStart,setopenHoursStart] = useState("");
    const [openHoursEnd,setopenHoursEnd] = useState("");
    const [selectedImage , setSelectedImage] = useState();

    const navigate = useNavigate();

    const handleImageSelect = (event)=>{
        setSelectedImage(event.target.files[0])
    }

    const getServiceData = (id) =>{
        axios.get("http://localhost:3000/pet-service/get-service/"+id)
        .then(res=>{
            setserviceName(res.data.result.serviceName);
            setserviceImage(res.data.result.serviceImage);
            setdescription(res.data.result.description);
            setcontactNo(res.data.result.contactNo);
            setopenHoursStart(res.data.result.openHoursStart);
            setopenHoursEnd(res.data.result.openHoursEnd);
        })
    }

    useEffect(()=> {
        if(id){
            getServiceData(id);
        }
    },[]);

    const updateService = async(e) =>{
        e.preventDefault();

        const formData = new FormData()
        formData.append("serviceName", serviceName)
        formData.append("serviceImage",selectedImage)
        formData.append("description", description)
        formData.append("contactNo", contactNo)
        formData.append("openHoursStart", openHoursStart)
        formData.append("openHoursEnd", openHoursEnd)

       

            await axios.put("http://localhost:3000/pet-service/update-service/"+id,
            formData)
            .then(() => {
                Swal.fire("Service updated");
                navigate('/get-service');
            }).catch((err)=>{
                alert(err);
                console.log(err);
            })    
        }


        return (
            <Formik>
            {(ServiceAddForm) => {
            return (
                <div className="home">
                    <div className="homeContainer">
                        <h1>Update Service</h1>
                            <form onSubmit={updateService} className='border border-success rounded was-validated' encType='multipart/form-data'>
                                <div className='p-4'>
                                    <div className='col-sm-6'>
                                        <div className="form-group">
                                            <label htmlFor="serviceName">Service name</label>
                                            <input  name="serviceName" id="serviceName"  cols="10" rows="4" className='form-control' required
                                            defaultValue={id ? serviceName : ""}
                                            type="text" 
                                            onChange={e=>setserviceName(e.target.value)}

                                         
                                            //ServiceAddForm.handleChange();
                                            />                                             
                                            
                                            <div class="invalid-feedback">Please enter the service name</div>
                               

                      
                                        </div>
                                    </div>
                                    <img src='https://media.istockphoto.com/vectors/veterinary-office-vector-illustration-vector-id1203744384?k=20&m=1203744384&s=612x612&w=0&h=yJaYAjPSonGdmoKOthsBdtx2mHpVl4O3e3MHlxWbRJ4='></img>
                                    <div className='col-sm-6'>
                                        <div className="form-group">
                                            <div className="form-group">
                                                <label htmlFor="serviceImage">Service image</label>
                                                <img src={id ? serviceImage: null} style={{ width: '150px', height: '20%', marginRight:"330px" , marginTop:"10px" , marginBottom:"10px"}} alt='boarding'></img>
                                                <input type='file'  name="serviceImage" id="serviceImage"  cols="10" rows="4" className='form-control' required
                                               defaultValue={id ? serviceImage:""}
                                               onChange={handleImageSelect}
                                               />
                                               
                                            </div>
                                            </div>
                                        </div>
                                    <div className='col-sm-6'>
                                            <div className="form-group">
                                            <label htmlFor="description">Description</label>
                                            <textarea name="description" id="description"  rows="4" className='form-control' required
                                            defaultValue={id ? description : ""}
                                            type="text" 
                                            onChange={e=>
                                                setdescription(e.target.value)
                                            } />
                                            <div class="invalid-feedback">Please enter the service description</div>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className="form-group">
                                            <label htmlFor="contactNo">Contact no</label>
                                            <input type="text" name="contactNo" id="contactNo" cols="10" rows="4" className='form-control' 
                                            pattern="[0][0-9]{9}" required   
                                            defaultValue={id ? contactNo : ""}
                                            onChange={(e)=>
                                                setcontactNo(e.target.value)
                                            } />
                                            <div class="invalid-feedback">Please enter valid contact number</div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className="form-group">
                                            <label htmlFor="openHours">Open hours</label>
                                            <input type='time' name="openHoursStart" id="openHoursStart" cols="10" rows="4" className='form-control' placeholder='Start Time' required
                                            defaultValue={id ? openHoursStart : ""}
                                            onChange={(e)=>
                                                setopenHoursStart(e.target.value)
                                            } />
                                            <div class="invalid-feedback">Please enter the starting time</div>
                                        </div>
                                    </div> 
                                    <div className='col-sm-5'>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1"></label>
                                            <input type='time' name="openHoursEnd" id="openHoursEnd" cols="10" rows="4" className='form-control' placeholder='End Time' required
                                            defaultValue={id ? openHoursEnd : ""}
                                            onChange={(e)=>
                                                setopenHoursEnd(e.target.value)
                                            } />
                                            <div class="invalid-feedback">Please enter the close time</div>
                                        </div>
                                    </div>              
                                    </div>         
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <input type="Submit" value="Update" name='Update' className='btn btn-primary'></input>
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

export default UpdateService;