import React from 'react'
import Common from './Common';
import web from "../src/images/home.png";

const Home = () => {
    return (
        <>
            <Common
                Image={web}
                heading="Grow your business with"
                button="Get Started"
                path="/service"

            />
        </>
    )
}

export default Home