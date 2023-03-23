import React, { useState } from 'react'

const Contect = () => {
    const [data, setdata] = useState({
        Fullname: "",
        phone: "",
        email: "",
        msg: ""
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;

        setdata((prevalue) => {
            return (
                {
                    ...prevalue,
                    [name]: value
                }
            );
        });

    };

    const formsubmit = (A) => {
        A.preventDefault();
        alert(`My name is ${data.Fullname}. My phone number is ${data.phone} and my email is ${data.email}`);
        setdata({
            Fullname: "",
            phone: "",
            email: "",
            msg: ""
        })
    };



    return (
        <>

            <div className='container contect_div d-flex flex-column justify-content-center'>
                <div className='my-5 text-center'>
                    <h1>Contact Us</h1>
                </div>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">FullName</label>
                                <input type="text" class="form-control"
                                    id="exampleFormControlInput1"
                                    name="Fullname"
                                    value={data.Fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="text" class="form-control"
                                    id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control"
                                    id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contect