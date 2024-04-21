import React from "react";

const Home = () => {
  return (
    <div className="card border-0">
      <img
        src="assets/home-background.jpg"
        alt=""
        className="card-img"
        height="650px"
      />
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container-fluid">
          <h5 className="card-title display-4 fw-bolder mb-0">
            NEW SEASON ARRIVELS
          </h5>
          <p className="card-text lead fs-2">CHECKOUT ALL NEW PRODUCTS</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
