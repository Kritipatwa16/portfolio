import React from "react";
import "./Footer.css";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, flexWrap:"wrap"}}>
          <div>© {new Date().getFullYear()} Kriti Patwa</div>
          <div style={{color:"var(--muted)"}}>Built with React • Designed for recruiters & hiring managers</div>
        </div>
      </div>
    </footer>
  );
}
