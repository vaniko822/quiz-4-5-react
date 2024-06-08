import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../Home.png'
import '../style.css'

const Home = () => {
  return (
    <div className="home-page-image" >
        <h1>Welcome to Home Page</h1>
      <img src={homeImage} alt="Home" />
        <br></br>
      <button className="gallery-btn"><Link to="/gallery">Go To Gallery</Link></button>
    </div>
  );
}

export default Home;