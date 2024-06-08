import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import Error from './components/Error';
import Footer from './components/Footer';
import './Navbar.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Go to Gallery</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile/:name?" element={<Profile />} />
          <Route path="*" element={<Error />}/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
