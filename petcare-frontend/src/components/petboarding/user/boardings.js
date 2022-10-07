import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './boarding.css';

const Boardings = () => {
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

 return(
   <div className="container" style={{float:'right',width: '81%', marginLeft: '15px'}}>
      <h1>Pet Boarding Places</h1>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">

          <div className="input-group mb-3">
            <input type='text' className='form-control' placeholder="Search by city" style={{width: '64%',borderRadius: '4px',border: '2px solid #ccc',height:'100%'}}
              onChange={handleSearch}/> 
          </div>
          
          <div className="row">
            {
               searchedData.map((boardings) => {
                  return(
                     <section class="why-us section-bg auto-space auto-space-vertical"><br/>
                        <div className="container" key={boardings._id} style={{backgroundColor:'white'}}>
                           <div className="row">
                              <div className="col-lg-4 video-box">
                                 <img src={boardings.boardingImage}
                                    className="img-fluid" alt="Not Available"
                                    style={{ objectFit: "cover", width: 300, height: 300, borderRadius:"18px" }}/>
                              </div>
                              <div className="col-lg-5 d-flex flex-column">
                                 <div className="col-md-40 col-sm-12"><br/>
                                    <h4 style={{ textAlign: "left", color: "black", fontWeight: "bold"}}>{boardings.boardingName}</h4><br/>
                                    <h5 style={{ fontFamily: "revert", color: "InfoText", textAlign:"left" }}>Contact Details</h5><br></br>
                                    <ul>
                                                <Row>
                                                    <Col>
                                                        <h6 style={{ color: "CaptionText" }}>
                                                            City:
                                                        </h6>
                                                        <p style={{ color: "GrayText", fontFamily: "monospace" }}>
                                                            {boardings.boardingaddress}
                                                        </p>
                                                    </Col>
                                                    <Col>
                                                        <h6>
                                                            Phone:
                                                        </h6>
                                                        <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                            {boardings.boardingphone}
                                                        </p>
                                                    </Col>
                                                    
                                             
                                                </Row>
                                                <Row>
                                                <Col>
                                                        <h6>
                                                            Email:
                                                        </h6>
                                                        <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                            {boardings.boardingemail}
                                                        </p>
                                                    </Col>
                                                    <Col>
                                                        <h6>
                                                            Opening hours:
                                                        </h6>
                                                        <p style={{ color: "grey", fontFamily: "monospace" }}>
                                                            {boardings.openHoursStart} -
                                                            {boardings.openHoursEnd}
                                                        </p>
                                                    </Col>
                                                   
                                                </Row>
                                            </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </section>
                  )
               })
            }
          </div>
        </div>
      </div>
    </div>
 )
}

export default Boardings;