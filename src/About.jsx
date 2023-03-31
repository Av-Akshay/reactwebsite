import React from 'react';
import Common from './Common';
import Aboimg from "../src/images/about.png";
// import Footer from './Footer';

const About = () => {
    return (
        <>

            <Common
                Image={Aboimg}
                heading="Welcome To About Page"
                button="Contect Now"
                path="/contect"
            />

        </>
    )
}

export default About