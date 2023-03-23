import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid '>
                    <div className='container-fluid mx-auto row'>
                        <div className='col-10 mx-auto'>
                            <div className='row d-flex align-items-center justify-content-center'>
                                <div className='col-md-6 col-10 d-flex justify-content-center order-md-1 order-2 flex-column
                                text-md-start text-center' >
                                    <h1>
                                        {props.heading} <strong className='brand-name'> Akshay Chauhan</strong>
                                    </h1>
                                    <h3 className='my-3'>
                                        We are the team of talented developer macking website
                                    </h3>
                                    <div className='mt-3'>
                                        <NavLink to={props.path} className="btn btn-outline-primary">{props.button}</NavLink>
                                    </div>
                                </div>
                                <div className='col-md-6 col-10 pt-5 pt-lg-0 order-1 order-md-2 ps-md-0 ps-5'>
                                    <img src={props.Image} alt="animated-logo" className='img-fluid animated' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Common