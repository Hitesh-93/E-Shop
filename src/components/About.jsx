import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="container my-4" id="about">
      <h5 className="mb-5">About us</h5>
      <div className="row mt-5">
        <div className="col">
          <img className="aboutImg" src="./assets/about.jpg" alt="" />
        </div>

        <div className="col">
          <h1 className="fw-bolder">
            Welcome To <span className="text-warning">E-Shop</span>
          </h1>
          <br />
          <h3>Get to know about.........</h3>
          <p className="text-secondary fs-4">
            E-shop is a new online store continuously envolving in online
            shopping experiance. Just like in any shopping center, there's
            always something new and exciting.
          </p>
          <a className="btn btn-outline-dark text-danger fw-bold" href="#">
            Know more
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
