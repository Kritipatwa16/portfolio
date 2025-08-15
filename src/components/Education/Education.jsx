import React from "react";
import "./Education.css";

export default function Education(){
  return (
    <section id="education" className="education section">
      <h2>Education</h2>
      <div className="edu-list">
        <div className="edu-item">
          <h4>B.Tech in Computer Science</h4>
          <p>Techno India NJR Institute of Technology, Rajasthan — Aug 2022 – Jul 2026</p>
          <p><strong>CGPA:</strong> 9.64</p>
        </div>

        <div className="edu-item">
          <h4>Class XII (Senior Secondary)</h4>
          <p>St. Gregorios Senior Secondary School, Rajasthan — Apr 2020 – May 2021</p>
          <p><strong>Marks:</strong> 95.6%</p>
        </div>
      </div>
    </section>
  );
}
