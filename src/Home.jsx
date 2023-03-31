import React from 'react'
import Common from './Common';
import web from "../src/images/home.png";
// import Footer from './Footer';
import "./home.css";

const Home = () => {
    return (
        <>
            <Common
                Image={web}
                heading="Grow your business with"
                button="Get Started"
                path="/service"
            />
            {/* <Footer /> */}
        </>
    )
}

export default Home