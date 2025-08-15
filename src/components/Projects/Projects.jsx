import React from "react";
import "./Projects.css";

export default function Projects(){
  const projects = [
    {
      title: "E-Commerce Web Application (MERN)",
      desc: "Full-stack e-commerce app with product catalog, search, filtering, and add-to-cart. RESTful APIs (Node + Express), MongoDB, responsive React front-end."
    },
    {
      title: "Prescripto — Doctor’s Appointment Booking",
      desc: "Responsive React UI for booking appointments, doctor profiles and appointment management; integrated APIs for dynamic data."
    },
    {
      title: "Cryptocurrency Price Tracker Web Application",
      desc: "Built a responsive web app using React.js and CoinGecko API to display real-time crypto prices, trends, and charts."
    }
  ];

  return (
    <section id="projects" className="projects section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p,i)=>(
          <article className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech">Tech: React • Node.js • Express • MongoDB</div>
          </article>
        ))}
      </div>
    </section>
  );
}
