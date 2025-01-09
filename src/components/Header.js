import React from 'react';
import { Link } from 'react-router-dom';
const rpLogo = '/images/rp-logo.png';

function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={rpLogo} alt="RP logo" title="RP | Home" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/diplomas">Diplomas</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Header;
