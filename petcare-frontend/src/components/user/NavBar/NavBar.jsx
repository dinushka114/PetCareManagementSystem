import React from 'react'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                {/* <button class="btn btn-primary" id="sidebarToggle"><i class="fa fa-bars"></i></button> */}
                <h2>Hello , {JSON.parse(localStorage.getItem("user")).fullName} </h2>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> */}
                <div class="" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <img src={JSON.parse(localStorage.getItem("user")).image} width={"60px"} height={"60px"} style={{borderRadius:"50%",border:"2px solid black"}} alt="asdasd" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar