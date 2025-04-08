
import React from 'react';
import "./Home.css"

const Home = () => {
  return (
    <header className="header">
      <img src="/LogoWhite.png" alt="Eventfy Logo" className="logo" />
      <nav className="nav">
        <a href="#" className="nav-link">Search events</a>
        <a href="#" className="nav-link">User guide</a>
        <a href="#" className="nav-link">About us</a>
      </nav>
      <button className="login-button">Login</button>
    </header>
  );
};

export default Home;