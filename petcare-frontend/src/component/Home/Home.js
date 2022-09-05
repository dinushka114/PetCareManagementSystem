import React, {Fragment} from 'react';
import Footer from '../layout/Footer/Footer'
import Header from '../layout/Header/Header'
import "./Home.css"


const Home = () => {
  return ( 
    <div>
        <Header />

        <Fragment> 
        <div className = "banner">
            <p> Welcome to Pawell's Pet Products </p>
            <h1> FIND AMAZING PRODUCTS BELOW </h1>

            <a href = "#container">
                <button> 
                    Scroll 
                </button>
            </a>
        </div>
        </Fragment>


        <Footer />
    </div>
  );
};

export default Home;
