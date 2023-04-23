import React from "react";
import "./MainCard.css";

export default function MainCard() {
  return (
    <div className="main-card-body">
      <div className="dcard">
        <h1 className="main-card-title">Contact Me!</h1>
        <div className="placeholder">sapartyom@g.ucla.edu</div>
        <div className="placeholder">
          <a
            id="linkin"
            href="https://www.linkedin.com/in/sapartyom/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
