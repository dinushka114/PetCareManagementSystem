import React, {useState, useEffect} from "react";
import './home.css';
import axios from 'axios';
const Swal = require('sweetalert2')

const Home = () =>{

  const [boardingData,setboardingData] = useState([]);

  const getBoardingData = () => {
    axios.get('http://localhost:3000/pet-boarding/get')
            .then(res => {
                const allBoardingData = res.data.result;
                setboardingData(allBoardingData)       
            })
  }

  const handleSearchArea = (e) =>{
    console.log(e.target.value);
  }

  const deleteBoarding = (id)=>{
    var answer = window.confirm("are you sure?")
      if(answer){
        axios.delete("http://localhost:3000/pet-boarding/delete/"+id)
        .then(res=>{
          if(res.status===200){
            Swal.fire("Boarding Deleted")
            getBoardingData()
          }
        })
      }
    }

    useEffect(()=>{
      getBoardingData()
    },[]);

  return (
    <>
    <h1>Pet Boarding Places Admin View</h1>
    <div className="container" style={{float:'right',width: '84%', marginLeft: '15px'}}>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div className="input-group mb-3">
            <input type='text' class='form-control' placeholder="Search by location"
              onChange={()=>handleSearchArea}/>
          </div>
          <div class="row">
            <div class="table-responsive ">
              <table class='table table-striped table-hover table-bordered'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone No</th>
                    <th>Opening</th>
                    <th>Closing</th>
                    <th colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                boardingData.map((boardings) => {
                return (
                  <tr>
                    <td>{boardings.boardingName}</td>
                    <td>{boardings.boardingImage}</td>
                    <td>{boardings.boardingemail}</td>
                    <td>{boardings.boardingaddress}</td>
                    <td>{boardings.boardingphone}</td>
                    <td>{boardings.openHoursStart}</td>
                    <td>{boardings.openHoursEnd}</td>
                    <td><button onClick={event => window.location.href='/update/${boardings._id}'}
                      className="btn btn-success">Update</button></td>
                    <td><button onClick={()=>deleteBoarding(boardings._id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                )
              })
            }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/>
    </>
  );

  
}

export default Home;
