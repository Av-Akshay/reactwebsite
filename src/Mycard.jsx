import React from 'react';
import { NavLink } from 'react-router-dom';


const Mycard = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto ' style={{ height: "100%" }}>
                <div className="card">
                    <img src={props.Cardimg} className="card-img-top" alt="cards" style={{
                        height: "150px",
                        width: "100%"
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.Cardtitle}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mycard;