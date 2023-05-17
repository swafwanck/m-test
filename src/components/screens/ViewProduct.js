import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewProduct.css";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://apitextile.eyeterp.com/product/viewproduct")
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="head">CURD Operation </h1>
      <div className="container">
        <h2>View Products</h2>
        {products.map((product) => (
          <div key={product._id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                Product Name: {product.productName}
              </h5>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Price: {product.price}</p>
            </div>
          </div>

        ))}
      </div>
      
    </>
  );
};

export default ViewProduct;
