import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          E-Shop
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav fs-5 mx-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={"/"}>
                Home
              </NavLink>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#review">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            /> */}
            <button className="btn btn-outline-dark ms-2" type="submit">
              <FaLock />
            </button>
            <button className="btn btn-outline-dark ms-2" type="submit">
              <FaUser />
            </button>
            <button className="btn btn-outline-dark ms-2" type="submit">
              <FaShoppingCart />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
