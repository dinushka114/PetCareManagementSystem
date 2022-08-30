import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge';

function Report() {
  return (
    <>
    <h1>Pet Boarding Report Generating</h1>
    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-6 mt-8 mb-4 text-gred">
            <div className="search">
          
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search location"
                  aria-label="Search" /> <br/> <Badge bg="success" style={{fontSize: 16}}>Download PDF</Badge>
              </form>
            </div>
            
          </div>
          
          <div class="row">
            <div class="table-responsive ">
              <table class="table table-striped table-hover table-bordered">
                <thead>
                  <tr >
                    <th>Boarding ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone No</th>
                    <th>Open Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>maddie</td>
                    <td>monkey@gmail.com</td>
                    <td>kandy</td>
                    <td>0767780098</td>
                    <td>6AM-8PM</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>maddie</td>
                    <td>monkey@gmail.com</td>
                    <td>kandy</td>
                    <td>0767780098</td>
                    <td>6AM-8PM</td>
                  </tr>
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
