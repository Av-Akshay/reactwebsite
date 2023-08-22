import React, { useState } from "react";

const Contect = () => {
  const [data, setdata] = useState({
    Fullname: " ",
    phone: " ",
    email: " ",
    msg: " ",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setdata((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const formsubmit = (A) => {
    A.preventDefault();
    console.log(data.Fullname);
    if (data.Fullname && data.phone && data.email && data.msg) {
      alert(
        `My name is ${data.Fullname}. My phone number is ${data.phone} and my email is ${data.email}`
      );
      setdata({
        Fullname: "",
        phone: "",
        email: "",
        msg: "",
      });
    } else {
      alert("please fill the all details");
    }
  };

  return (
    <>
      <div className="container contect_div d-flex flex-column justify-content-center ">
        <div className="my-3 my-md-5 text-center">
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label className="form-label">FullName</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="Fullname"
                  value={data.Fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter Your Mobile number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Example textarea</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contect;
