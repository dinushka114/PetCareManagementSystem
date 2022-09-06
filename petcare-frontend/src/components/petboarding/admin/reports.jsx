import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const Report =() =>{

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

  useEffect(()=>{
    getBoardingData()
  },[]);


  return (
    <>
    <div className="container" style={{float:'right',width: '84%', marginLeft: '15px'}}>
    <h1>Pet Boarding Report Generating</h1>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">

          <div className="input-group mb-3">
            <input type='text' className='form-control' placeholder="Search by city" style={{width: '64%',borderRadius: '4px',border: '2px solid #ccc',height:'100%'}}
              onChange={handleSearch}/> &nbsp;&nbsp;&nbsp;
              <div className='col-sm-2'>
                   <input type="submit" name='Download' value='Download' className='btn btn-success'></input> 
                </div>
          </div>
          
          <div className="row">
            <div className="table-responsive ">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr >
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone No</th>
                    <th>Open Hours Start</th>
                    <th>Open Hours End</th>
                  </tr>
                </thead>
                <tbody>
                {
                searchedData.map((boardings) => {
                return (
                  <tr key={boardings._id}>
                    <td>{boardings.boardingName}</td>
                    <td>{boardings.boardingemail}</td>
                    <td>{boardings.boardingaddress}</td>
                    <td>{boardings.boardingphone}</td>
                    <td>{boardings.openHoursStart}</td>
                    <td>{boardings.openHoursEnd}</td>
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

export default Report;
