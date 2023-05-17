import React, { useState } from 'react';
import axios from 'axios';

const ViewProductById = () => {
  const [_id, setId] = useState('');
  const [product, setProduct] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://apitextile.eyeterp.com/product/ViewProductById?_id=${_id}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>View Product By ID</h2>
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
        <button type="submit" className="btn btn-primary">View Product</button>
      </form>
      {product && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Product Name: {product.productName}</h5>
            <p className="card-text">Description: {product.description}</p>
            <p className="card-text">Price: {product.price}</p>
            {/* Display other product details as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProductById;
