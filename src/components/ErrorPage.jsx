import React from "react";

const ErrorPage = () => {
  return (
    <div className="container-fluid">
      <h2 className="text-danger text-center my-4">Sorry...... page not found</h2>
      <img className="errorImg" src="./assets/error.jpeg" alt="" />
    </div>
  );
};

export default ErrorPage;
