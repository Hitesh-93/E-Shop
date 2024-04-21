import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="card bg-dark text-white border-0" id="contact">
        <img src="./assets/contactus.avif" className="card-img" height="550px" alt="" />

        <div className="card-img-overlay d-flex flex-column justify-content-center ">
        <div className="container text-black text-center ">
        <h1 className="p-3 text-center mb-4 fw-bold mb-5" style={{ marginTop: "-60px" }} >CONTACT US</h1>
        <div className="row">
            <div className="col">
                <FaLocationDot style={{height: "25px", width: "25px", marginBottom: "20px", }} />
                <h4>ADDRESS</h4>
                <p> Survey no- 15/3 <br />Baner Road, <br /> CME, Pune, <br /> pin-665437 </p>
            </div>
            <div className="col">
                <FaPhoneSquareAlt style={{height: "25px", width: "25px", marginBottom: "20px",  }} />
                <h4>PHONE</h4>
                <p>02510-457890</p>
            </div>
            <div className="col">
                <MdEmail style={{height: "25px", width: "25px", marginBottom: "20px", }}/>
                <h4>EMAIL</h4>
                <p>sawadekavita.1102@gmail.com</p>
            </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
