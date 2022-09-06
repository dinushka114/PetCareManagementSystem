import React, {useState, useEffect} from "react";
import './home.css';
import axios from 'axios';
const Swal = require('sweetalert2');

const Home = () =>{

  const [boardingData,setboardingData] = useState([]);
  const [searchedData , setSearchedData] = useState(boardingData);

  const handleSearch = (e) =>{
    // console.log(e.target.value);
    const value = e.target.value;
    let res = [];
    res = boardingData.filter(data=>{
      return data.boardingaddress.toLowerCase().includes(value.toLowerCase());
    });

    setSearchedData(res)
  }

  const getBoardingData = () => {
    axios.get('http://localhost:3000/pet-boarding/get')
            .then(res => {
                const allBoardingData = res.data.result;
                setboardingData(allBoardingData)     
                setSearchedData(allBoardingData)
            })
  }

  const deleteBoarding = (id)=>{
    var answer = window.confirm("Are you sure you want to delete?")
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
    <div className="container" style={{float:'right',width: '84%', marginLeft: '15px'}}>
    <h1>Pet Boarding Places Admin View</h1>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="input-group mb-3">
            <input type='text' placeholder="Search by city" style={{width: '64%',borderRadius: '4px',border: '2px solid #ccc',height:'130%'}}
              onChange={handleSearch} width='40%'/>
          </div>
          <div className="row">
            <div className="table-responsive ">
              <table className='table table-striped table-hover table-bordered'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone No</th>
                    <th>Opening</th>
                    <th>Closing</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                searchedData.map((boardings) => {
                return (
                  <tr key={boardings._id}>
                    <td>{boardings.boardingName}</td>
                    <td> <img src={boardings.boardingImage} alt="image" className="image"/> </td>
                    <td>{boardings.boardingemail}</td>
                    <td>{boardings.boardingaddress}</td>
                    <td>{boardings.boardingphone}</td>
                    <td>{boardings.openHoursStart}</td>
                    <td>{boardings.openHoursEnd}</td>
                    <td><button onClick={() => window.location.href=`/update/${boardings._id}`}
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
