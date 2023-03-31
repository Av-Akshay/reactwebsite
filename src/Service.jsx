import React from 'react';
// import Footer from './Footer';
import Mycard from "./Mycard";
import Sdata from './Sdata';



const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our services</h1>
            </div>

            <div className='container-fluid mb-5 service-header' >

                <div className='row service_container pb-4' >
                    <div className='col-10 mx-auto '>
                        <div className='row gy-4'>



                            {Sdata.map((val, ind) => {
                                return (
                                    <Mycard
                                        key={ind}
                                        Cardimg={val.imagesrc}
                                        Cardtitle={val.title} />
                                )

                            })}





                        </div>
                    </div>
                </div>

            </div>


        </>

    );
}

export default Service