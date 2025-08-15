import React from "react";
import "./Contact.css";

export default function Contact(){
  return (
    <section id="contact" className="contact section">
      <h2>Contact</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <h4>Email</h4>
          <p><a href="mailto:kriti.patwa15@gmail.com">krit.patwa15@gmail.com</a></p>
        </div>

        <div className="contact-card">
          <h4>Phone</h4>
          <p><a href="tel:+916377792777">+91 63777 92777</a></p>
        </div>

        <div className="contact-card">
          <h4>LinkedIn</h4>
          <p><a href="https://www.linkedin.com/in/kriti-patwa-46c04b299/" target="_blank" rel="noreferrer">linkedin.com/in/kriti-patwa-46c04b299</a></p>
        </div>
      </div>
    </section>
  );
}
