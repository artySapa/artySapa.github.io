import "./WorkExperience.css";
import React from "react";

export default function WorkExperience(props) {
  const {experienceList} = props;

  return (
    <div className="work-body">
      <div className="flip-card">
        <div className="work-body-front">
          <h1 className="work-body-title">{props.name}</h1>
          <p className="work-body-description">{props.role}</p>
        </div>
        <div className="work-body-back">
          <ul>
            {experienceList.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}