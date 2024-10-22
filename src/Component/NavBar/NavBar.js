import React, { useState } from 'react';
import './NavBar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">ANDI</a>
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="/showcase">Showcase</a>
          <a href="/docs">Docs</a>
          <a href="/blog">Blog</a>
          <a href="/analytics">Analytics</a>
          <a href="/commerce">Commerce</a>
          <a href="/templates">Templates</a>
          <a href="/enterprise">Enterprise</a>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search documentation..." className="search-input" />
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            &#9776;
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
