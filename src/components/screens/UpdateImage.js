import React, { useState } from 'react';
import axios from 'axios';

const UpdateImage = () => {
  const [deleteUrl, setDeleteUrl] = useState('');
  const [addUrl, setAddUrl] = useState('');
  const [_id, setId] = useState('');
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('deleteUrl', deleteUrl);
    formData.append('addUrl', addUrl);
    formData.append('_id', _id);

    try {
      const response = await axios.put(
        'https://apitextile.eyeterp.com/product/updateImageUrl',
        formData
      );
      console.log(response.data); // Handle the response as per your requirements
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Update Image URL</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Delete URL"
            value={deleteUrl}
            onChange={(e) => setDeleteUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control-file"
            onChange={(e) => setAddUrl(e.target.files[0])}
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
        <button type="submit" className="btn btn-primary">Update Image URL</button>
      </form>
    </div>
  );
};

export default UpdateImage;
