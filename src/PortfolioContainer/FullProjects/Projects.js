import React from "react";

import "./Projects.css";

import ProFlowDemo from "../../assets/ProFlowDemo.mov";

import DescriptionProj from "./DescriptionProj/DescriptionProj";

export default function Projects() {
  return (
    <div className="projectpage-body">
      <DescriptionProj
        video={ProFlowDemo}
        description={[
          "When working on projects of any scale, managing tasks and tracking progress is essential to success. ProFlow is a web application that enables teams to do just this. By making an account, creating a project, and inviting members, managing a project will become simple. Members of a project can add columns, subprojects, and tasks as the project evolves! Our tool makes this far easier by enabling a folder-like structure that mimics how real projects are set up. ",
            "ProFlow attempts to minimize the number of required packages by taking advantage of Docker containerization by using Docker. Other Technologies used include React, NestJS, MySQL, etc.",
        ]}
        to_link="https://github.com/CS35L-ProFlow/ProFlow"
      />
    </div>
  );
}
