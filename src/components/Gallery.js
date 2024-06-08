// Gallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../gallery.css'

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=4')
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="gallerytxt">Gallery</h1>
      <div className="gallery-container">
        {photos.map(photo => (
          <div key={photo.id} className="photo-card">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
