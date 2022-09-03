import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Report() {
  return (
    <>
    <h1>Pet Boarding Report Generating</h1>
    <div class="container" style={{float:'right',width: '84%', marginLeft: '15px'}}>
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-6 mt-8 mb-4 text-gred">
            <div className="search">
          
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search location"
                  aria-label="Search" /> <br/>
                  <div className='col-sm-2'>
                   <input type="submit" name='Download' value='Download' className='btn btn-success'></input> 
                </div>
              </form>
            </div>
            
          </div>
          
          <div class="row">
            <div class="table-responsive ">
              <table class="table table-striped table-hover table-bordered">
                <thead>
                  <tr >
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone No</th>
                    <th>Open Hours Start</th>
                    <th>Open Hours End</th>
                  </tr>
                </thead>
                <tbody>
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
