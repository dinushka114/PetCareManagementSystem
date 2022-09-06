import React from 'react'

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                {/* <button class="btn btn-primary" id="sidebarToggle"><i class="fa fa-bars"></i></button> */}
                <h2>Hello , {JSON.parse(localStorage.getItem("user")).fullName} </h2>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        {/* <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Link</a></li> */}
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#!">Action</a>
                                <a class="dropdown-item" href="#!">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#!">Something else here</a>
                            </div>
                        </li> */}
                        <img src={JSON.parse(localStorage.getItem("user")).image} width={"90px"} height={"90px"} style={{borderRadius:"50%",border:"2px solid black"}} alt="asdasd" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar