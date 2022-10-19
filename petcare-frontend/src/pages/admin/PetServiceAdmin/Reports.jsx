import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import jsPDF from 'jspdf'
import './reports.scss'
import Service from '../PetServiceAdmin/view-reportService'
//import Vehicle from '../vehicle/View_vehicle'
import Img from './logo.jpg'
import PetsIcon from '@mui/icons-material/Pets';
import { Icon } from '@mui/material';


const Reports = () => {  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });




  return (<>

      <div ref={componentRef}>
 
              <hr></hr>
          <div className='borders'>
            <div className='letterhead'>
              <h3 className='header'>Puppy Pet Care Service</h3>     
              <h3 className='subHeader'>Best services for your pets</h3>
              <h3 className='address'>No 12 , Setsiri Place,<span className='space1'>Contact : 070-4318718 </span>  </h3>
              <h3 className='address'>Sri lanka <span className='space3'> 
              Email: puppy@gmail.com </span> </h3>
              <hr></hr>
            </div>

              
              <h1 className='reportheader'>Service Report</h1>
              
              <div className='home'>

                  <div className='homeContainer'>

                          <Service/>

                  </div>
              </div>    
            


          </div>
        


      </div>
    <button onClick={handlePrint} className="print"> Print and Download</button> 
  </>

  
  )
}
export default Reports