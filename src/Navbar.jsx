import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='"container nav_bg' >

                <div className='col-12'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid px-5">
                            <NavLink className="navbar-brand" to="/">Akshay chauhan</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 list-group">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/" exact="true">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about" exact="true" >About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contect" exact="true">Contect</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/service" exact="true">Service</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>


            </div>
        </>
    )
}

export default Navbar;