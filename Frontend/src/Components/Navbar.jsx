import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📦 NPM Favorites
        </Link>
        <div className="navbar-links">
          <Link
            to="/"
            className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Search
          </Link>
          <Link
            to="/favorites"
            className={`navbar-link ${location.pathname === '/favorites' ? 'active' : ''}`}
          >
            My Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;