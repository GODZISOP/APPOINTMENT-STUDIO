import React, { useState } from "react";
import imgg from "../Assets/WhatsApp Image 2024-10-12 at 00.50.51_36144618.jpg";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <img src={imgg} alt="" id="imggg" />
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li><Link to="/" className="navbar-links">Home</Link></li>
        <li><a href="#services" className="navbar-links">Services</a></li>
        <li><a href="#about" className="navbar-links">About</a></li>
        <li><a href="#reviews" className="navbar-links">Reviews</a></li>
        <li><a href="#doctors" className="navbar-links">Experts</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="mobile-nav" onClick={openNav}>
        <div className={`hamburger ${nav ? "active" : ""}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">X</div>
        <ul className="mobile-navbar-links">
          <li><Link onClick={openNav} to="/">Home</Link></li>
          <li><a onClick={openNav} href="#services">Services</a></li>
          <li><a onClick={openNav} href="#about">About</a></li>
          <li><a onClick={openNav} href="#reviews">Reviews</a></li>
          <li><a onClick={openNav} href="#doctors">Experts</a></li>
          <li><a onClick={openNav} href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
