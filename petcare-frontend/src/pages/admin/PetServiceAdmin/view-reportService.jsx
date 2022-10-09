import './view.scss'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useEffect, useState, } from "react";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from "../../../components/admin/Sidebar/sidebar";
import { Link } from "react-router-dom"
const Swal = require('sweetalert2');


const Viewservice = () => {
    const [serviceData,setServiceData] = useState([]);
    const [filteredData, setFilteredData] = useState(serviceData);
    const [isLoading, setIsLoading] = useState(false)

    const handleSearch = (e) => {
      let value = e.target.value;
      let result = [];
      
      result = serviceData.filter((data) => {
          return data.serviceName.search(value) != -1;
          
      });
      
      setFilteredData(result);
  }

    const getServiceData = async () => {
      setIsLoading(true)
        await axios.get('http://localhost:3000/pet-service/get-service')
            .then(res => {
                const allServiceData = res.data.result;
                setServiceData(allServiceData)   
                setFilteredData(res.data.result)
                setIsLoading(false)
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
        getServiceData();
    },[]);


    return(
      
        <TableContainer component={Paper} className="table">
        

       
       
        <table  className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Service Image</th>
              <th scope="col">Description</th>
              <th scope="col">Contact</th>
              <th scope="col">Opening</th>
              <th scope="col">Closing</th>

            </tr>
          </thead>
          <tbody>
            {
               isLoading ? "Loading" : filteredData.map((services, index) => {
                return (
                  <tr key={services._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{services.serviceName}</td>
                    <img src={services.serviceImage} alt="" className="imgwidth" />
                    <td className="widthdescription">{services.description.substring(0,20)}</td>
                    <td className='widthcontact'>{services.contactNo}</td>
                    <td>{services.openHoursStart}</td>
                    <td>{services.openHoursEnd}</td>
                   
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