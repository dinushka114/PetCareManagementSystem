import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useEffect, useState, } from "react";
import axios from 'axios';
import Sidebar from "../../../components/admin/Sidebar/sidebar";
import { Link } from "react-router-dom"
const Swal = require('sweetalert2')


const Viewservice = () => {
    const [serviceData,setServiceData] = useState([]);

    const getServiceData = () => {
        axios.get('http://localhost:3000/pet-service/get-service')
            .then(res => {
                const allServiceData = res.data.result;
                setServiceData(allServiceData)       
            })
    }

    const deleteService = (id)=>{
      
       
          axios.delete("http://localhost:3000/pet-service/delete-service/"+id)
          .then(res=>{
            if(res.status===200){
              Swal.fire("Service Deleted")
              getServiceData()
            }
          })
      }

    useEffect(()=>{
        getServiceData()
    },[]);

    return(
        <TableContainer component={Paper} className="table">
     
        <table  className="table table-striped">
          <thead>
            <tr>
              <th scope="col">service_name</th>
              <th scope="col">service_image</th>
              <th scope="col">description</th>
              <th scope="col">open_hours_start</th>
              <th scope="col">open_hours_end</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              serviceData.map((services) => {
                return (
                  <tr>
                    <td>{services.serviceName}</td>
                    <td> <img src={services.serviceImage} alt="" /> </td>
                    <td>{services.description}</td>
                    <td>{services.openHoursStart}</td>
                    <td>{services.openHoursEnd}</td>
                    <td><button className="btn btn-warning">Update</button></td>
                    <td><button onClick={()=>deleteService(services._id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </TableContainer>
       
    );
}

export default Viewservice;