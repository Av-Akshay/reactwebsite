import React from 'react'
import Mycard from "./Mycard"
import Sdata from './Sdata';


const Service = () => {
    return (
        <>

            <div className='container mb-2 service_div d-flex flex-column justify-content-center'>
                <div className='my-2'>
                    <h1 className='text-center'>Our services</h1>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row'>



                            {Sdata.map((val, ind) => {
                                return (
                                    <Mycard
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