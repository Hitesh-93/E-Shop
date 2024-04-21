import React from "react";

import { products } from "../data";

const Products = () => {
  return (
    <div className="container" id="products">
      <h5 className="my-5">Products</h5>
      <div className="row">
        {products.map((item, index) => {
          return (
            <div className="col col-3 mb-5 d-flex justify-content-evenly">
              <div
                className="card border-0 "
                key={index}
                style={{ width: "15rem", height: "30rem" }}
              >
                {/* <div className="text-end">
                  <span className="text-white bg-success  me-1 ">
                    {item.discount}%
                  </span>
                </div> */}
                <img
                  className="card-img"
                  src={item.image}
                  alt=""
                  height={"50%"}
                />
                <div className="card-body">
                  <p className="card-title">{item.title}</p>
                  <p className="card-text">
                    <span className="px-2 fw-bold">
                      &#8377;
                      {Math.ceil(
                        item.price - (item.price * item.discount) / 100
                      )}
                    </span>
                    <del className="text-danger">&#8377;{item.price}</del>
                    <span className="text-success ms-3 fw-bold">
                      {item.discount}%
                    </span>
                  </p>
                </div>
                <button className="btn btn-outline-success">More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
