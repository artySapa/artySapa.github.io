import React from "react";

import "./Projects.css";

import ProFlowDemo from "../../assets/ProFlowDemo.mov";
import BattleshipDemo from "../../assets/BattleshipDemo.mp4";
import CompilerDemo from "../../assets/CompilerDemo.mov";
import FilmItDemo from "../../assets/FilmItDemo.mp4";
import share3Demo from "../../assets/share3D.mp4";

import DescriptionProj from "./DescriptionProj/DescriptionProj";

export default function Projects() {
  return (
    <div className="projectpage-body">
      <DescriptionProj
        ind="1"
        title="ProFlow"
        video={ProFlowDemo}
        description={[
          "When working on projects of any scale, managing tasks and tracking progress is essential to success. ProFlow is a web application that enables teams to do just this. By making an account, creating a project, and inviting members, managing a project will become simple. Members of a project can add columns, subprojects, and tasks as the project evolves! Our tool makes this far easier by enabling a folder-like structure that mimics how real projects are set up. ",
          "ProFlow attempts to minimize the number of required packages by taking advantage of Docker containerization by using Docker. Other Technologies used include React, NestJS, MySQL, etc.",
        ]}
        to_link="https://github.com/CS35L-ProFlow/ProFlow"
      />
      <div className="description-card">
      <DescriptionProj
        ind="2"
        title="FilmIt"
        video={FilmItDemo}
        description={[
          "This project is meant to be a useful tool for anyone who wants a simple random movie recommendation based on their preferences. Just fill out the filters, read the description, watch the trailer and decide if you want to watch it. ",
          "The project can be minimally modified to be used with any of the many others movie APIs to get more selection of movies.",
        ]}
        to_link="https://github.com/artySapa/movie-filter"
      />
      </div>
      <DescriptionProj
          ind="1"
          video={share3Demo}
          title="Share3D"
          description={[
            "When looking for a 3d model to print or to simply to play with, you might want to ask someone for help online, here is where Share3D comes in!  ",
            "Simply create a post, elaborate on the request, and get the 3d models offered to you!",
            "You can also help other posts by responding to their request if you have a solution to their problem."
          ]}
          to_link="https://github.com/artySapa/3d-project"
        />
        <div className="description-card">
        <DescriptionProj
          ind="2"
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
        </div>
      <DescriptionProj
        ind="1"
        video={CompilerDemo}
        title="Compiler Performance"
        description={[
          "I implemented a better compiler algorithm to sort enormous amounts of data using hash tables and vectors of vectors.",
          "The Final performance for 400000 lines of code reduced from ~2500 msec to ~11 msec.",
          "To use it, first uncomment the generateTests file and run only this file. Then comment it out again and use the testNameTable file to go through the algorithms.",
        ]}
        to_link="https://github.com/artySapa/Compiler"
      />
    </div>
  );
}
