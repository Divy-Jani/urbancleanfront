import React from 'react';
import './Request.css'; // Assuming you create a CSS file for the styles
import { Link } from 'react-router-dom';

function RequestR({ title, imageUrl, lat, lon, status }) {
  return (
    <div className='Bg2'>
      <div className="card-list">
        <article className="card">
          <figure className="card-image">
            <img src={imageUrl} alt="image" />
          </figure>
          <div className="card-header">
            <a href="#">{title}</a>
          </div>
          <div className="card-footer">
            <div className="card-meta">
              <p>Latitude: {lat}, Longitude: {lon}</p>
              <p>Status: {status}</p>
            </div>
            <div className="status-button">
              <button className={`status ${status === 'cleaned' ? 'cleaned' : 'pending'}`}>
                {status}
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default RequestR;
