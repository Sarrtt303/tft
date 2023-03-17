import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
import tft from "/images/tft.png";

function Header() {
  return (
    <header className="header">
       <div className="header-container">
       <div className="logo-container">
          <img src={tft} alt="tft logo" />
          <h1 className="site-name">TFT</h1>
        </div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/loans">Loans</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

export default Header;
