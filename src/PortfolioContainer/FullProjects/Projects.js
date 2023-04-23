import React from "react";

import "./Projects.css";

import ProFlowDemo from "../../assets/ProFlowDemo.mov";
import BattleshipDemo from "../../assets/BattleshipDemo.mp4";

import DescriptionProj from "./DescriptionProj/DescriptionProj";

export default function Projects() {
  return (
    <div className="projectpage-body">
      <DescriptionProj
        title="ProFlow"
        video={ProFlowDemo}
        description={[
          "When working on projects of any scale, managing tasks and tracking progress is essential to success. ProFlow is a web application that enables teams to do just this. By making an account, creating a project, and inviting members, managing a project will become simple. Members of a project can add columns, subprojects, and tasks as the project evolves! Our tool makes this far easier by enabling a folder-like structure that mimics how real projects are set up. ",
            "ProFlow attempts to minimize the number of required packages by taking advantage of Docker containerization by using Docker. Other Technologies used include React, NestJS, MySQL, etc.",
        ]}
        to_link="https://github.com/CS35L-ProFlow/ProFlow"
      />
      <DescriptionProj
        video={BattleshipDemo}
        title="Battleship game"
        description={[
          "Battleship game is a very famous game where there are two players trying to explode each other's battleship crew. Whoever destroy's all the ships first wins. In my particular implementation, player can choose 3 options: ",
            "1. A mini-game between two mediocre players",
            "2. A mediocre player against a human player",
            "3. A 100-game match between a mediocre and an good player, which has my own secret implementation of the actions.",
        ]}
        to_link="https://github.com/artySapa/Battleship"
      />
      <DescriptionProj
        video={BattleshipDemo}
        title="Compiler"
        description={[
          "Given a simple algorithm for the processing arbitrary number of lines of code, including noticing scopes, I made a better algorithm to reduce the time spent on processing. The Final performance for 400000 lines of code reduced from ~2500 msec to ~11 msec. To use it, fisr uncomment the generateTests file and run only this file. Then comment it out again and use the testNameTable file to go through the algorithms.",
        ]}
        to_link="https://github.com/artySapa/Compiler"
      />
    </div>
  );
}
