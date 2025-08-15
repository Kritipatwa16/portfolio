import React from "react";
import "./Skills.css";

export default function Skills(){
  const left = [
    {title:"Programming Languages", items:["C","C++","JavaScript"]},
    {title:"Web Technologies", items:["HTML","CSS","React.js","Node.js","Express.js"]}
  ];
  const right = [
    {title:"Databases", items:["MongoDB","SQL"]},
    {title:"Tools & Platforms", items:["Git/GitHub","VS Code","Vite"]}
  ];

  return (
    <section id="skills" className="skills section">
      <h2>Skills</h2>
      <div className="skill-grid">
        <div>
          {left.map((s,idx)=> (
            <div className="skill-card" key={idx}>
              <h4>{s.title}</h4>
              <p>{s.items.join(" • ")}</p>
            </div>
          ))}
        </div>
        <div>
          {right.map((s,idx)=> (
            <div className="skill-card" key={idx}>
              <h4>{s.title}</h4>
              <p>{s.items.join(" • ")}</p>
            </div>
          ))}
          <div className="skill-card">
            <h4>Others</h4>
            <p>Data Structures & Algorithms (DSA)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
