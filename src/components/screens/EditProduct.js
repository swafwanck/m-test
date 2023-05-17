import React, { useState } from 'react';
import axios from 'axios';

const EditProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [_id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('_id', _id);

    try {
      const response = await axios.put(
        'https://apitextile.eyeterp.com/product/editproduct',
        formData
      );
      console.log(response.data); // Handle the response as per your requirements
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Product ID"
            value={_id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Edit Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
