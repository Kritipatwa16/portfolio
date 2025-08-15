import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App(){
  return (
    <>
      <Navbar />
      <main className="container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
