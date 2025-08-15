import React from "react";
import "./Navbar.css";

export default function Navbar(){
  return (
    <header className="navwrap">
      <div className="nav container">
        <div className="brand">
          <div className="logo">KP</div>
          <div>
            <div className="brand-name">Kriti Patwa</div>
            <small className="brand-sub">MERN Stack Developer</small>
          </div>
        </div>

        <nav className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certs">Certifications</a>
          <a href="#contact" className="cta">Contact</a>
        </nav>
      </div>
    </header>
  );
}
