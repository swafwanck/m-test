import React, { useState } from "react";
import axios from "axios";


const DeleteProduct = () => {
  const [_id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        "https://apitextile.eyeterp.com/product/deleteproduct",
        {
          data: {
            _id: _id,
          },
        }
      );
      console.log(response.data); // Handle the response as per your requirements
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
  
      <div className="container">
        <h2>Delete Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Product ID"
              value={_id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Delete Product
          </button>
        </form>
      </div>
    </>
  );
};

export default DeleteProduct;
