import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";


const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const AddProductInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("file", file1);
    formData.append("file", file2);

    await axios({
        method: "post",
        url:"https://apitextile.eyeterp.com/product/addproduct",
        data: formData

    }).then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    })
    
  };
  return (
    <>
    
      <div className="container">
        <h2>Add Product</h2>
        <form id="htmlForm">
          <div className="form-group">
            <label htmlFor="productName">Product Name :</label>
            <input
              type="text"
              id="productName"
              className="form-control"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description :</label>
            <input
              type="text"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price :</label>
            <input
              type="text"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="file1">Files :</label>
            <div className="files">
              <input
                type="file"
                id="file1"
                className="form-control-file"
                onChange={(e) => setFile1(e.target.files[0])}
              />

              <input
                type="file"
                id="file2"
                className="form-control-file"
                onChange={(e) => setFile2(e.target.files[0])}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={AddProductInfo}>
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
