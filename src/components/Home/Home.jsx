import React from "react";
import "./Home.css";

export default function Home(){
  return (
    <section id="home" className="home section">
      <div className="home-inner">
        <div className="hero-left">
          <h1>Hi, I'm <span className="accent">Kriti Patwa</span></h1>
          <p className="lead">Dedicated MERN Stack developer building scalable and user-friendly web applications.</p>

          <div className="quick-links">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>
        </div>

        <div className="hero-right card">
          <h3>Quick Info</h3>
          <p><strong>Email:</strong> <a href="mailto:kriti.patwa15@gmail.com">kriti.patwa15@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+916377792777">+91 63777 92777</a></p>
          <p><strong>Location:</strong> Udaipur, Rajasthan, India</p>
          <p style={{marginTop:8}}><strong>Open to:</strong> Internships & Full-time roles</p>
        </div>
      </div>
    </section>
  );
}
