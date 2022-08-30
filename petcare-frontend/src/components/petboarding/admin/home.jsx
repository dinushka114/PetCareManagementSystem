import React from "react";
import Badge from 'react-bootstrap/Badge';
import './home.css';

function Home() {
  return (
    <>
    <h1>Pet Boarding Places Admin View</h1>
    <div class="container">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">
          <div class="col-sm-6 mt-8 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search location"
                  aria-label="Search" />
              </form>
            </div>
          </div>
          <div class="row">
            <div class="table-responsive ">
              <table class='table'>
                <thead>
                  <tr>
                    <th>Boarding ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone No</th>
                    <th>Open Hours</th>
                    <th colspan="2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>maddie</td>
                    <td>bloop</td>
                    <td>monkey@gmail.com</td>
                    <td>kandy</td>
                    <td>0767780098</td>
                    <td>6AM-8PM</td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Badge bg="success">Edit</Badge> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Badge bg="danger">Delete</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>maddie</td>
                    <td>bloop</td>
                    <td>monkey@gmail.com</td>
                    <td>kandy</td>
                    <td>0767780098</td>
                    <td>6AM-8PM</td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Badge bg="success">Edit</Badge> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Badge bg="danger">Delete</Badge>
                    </td>
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

export default Home;
