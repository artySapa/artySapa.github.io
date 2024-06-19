import "./ProjectCard.css";

import React from "react";

export default function ProjectCard(props) {
  return (
    <div className="projectcard-body">
      <article>
        <div class="article-wrapper">
          <figure>
            <img src={props.img_link} alt="" />
          </figure>
          <div class="article-body">
            <h2 className="title-card">{props.name}</h2>
            <p className="skills">{props.skills}</p>
            <p>{props.role}</p>
            <a href={props.to_link} class="read-more" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
