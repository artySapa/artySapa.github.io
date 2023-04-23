import "./Testimonial.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import WorkExperience from "./WorkExperience/WorkExperience";
import React from "react";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import battleship from "../../assets/battle.jpeg";
import hacking from "../../assets/hacking.png";
import proflow from "../../assets/proflow.jpeg";
import { Link } from "react-router-dom";

export default function Testimonial() {
  const experienceList1 = [
    "Wrote a script for automatically pushing out Windows updates and software updates for all departments, including internationally based computers and electronics with batch files, group policies, SQL, and LanSweeper",
    "Implemented interface features for webpages by updating files in a large Intranet code database using JavaScript",
    "Improved departments’ data communication and Access databases features by debugging SQL and VBA code",
    "Executed hardware and software troubleshooting processes on-site for other employees and security purposes",
  ];
  const experienceList2 = [
    "Led the creation of 4 large projects, including navigating and gymnastics apps with 1C, received patents for each",
    "Collaborated with my high school to encourage programming in 1C programming language among students ",
    "Distributed investors’ money over the high school teams by conducting a project competition amongst students",
    "Presented yearly progress report on the student projects during an international mobile application creation meeting",
  ];
  const experienceList3 = [
    "Managed and executed the daily deliveries, stocking, and distribution of the products in the student store",
    "Trained employees to work at the register and kept equipment and goods in a good condition and organization",
  ];
  return (
    <div className="whole-thing">
      <h1>Projects</h1>
      <div className="experience1">
        <ProjectCard
          name="Battleship Game"
          skills="C++"
          role="A simple battleship game on C++"
          to_link="https://github.com/artySapa/Battleship"
          img_link={battleship}
        />
        <ProjectCard
          name="Compiler performance"
          skills="C++"
          role="Algorithm of processing code scales"
          to_link="https://github.com/artySapa/Compiler"
          img_link={hacking}
        />
        <ProjectCard
          name="ProFlow"
          skills="React | TypeScript | CSS | HTML"
          role="Task Managing application"
          to_link="https://github.com/CS35L-ProFlow/ProFlow"
          img_link={proflow}
        />
      </div>
      <div className="afterParty">
        <Link to="/projects">
          <button className="btn primary-btn">More</button>
        </Link>
      </div>
      <Header />
      <div id="workexp">
        <p className="title-workexp">Work Experience</p>
        <div className="experience2">
          <WorkExperience
            name="Desco Industries Inc."
            role="Computer Science Intern"
            to_link="https://github.com/artySapa/Battleship"
            img_link={battleship}
            experienceList={experienceList1}
          />
          <WorkExperience
            name="Slava KVC"
            role="Tech Project Manager"
            to_link="https://github.com/artySapa/Battleship"
            img_link={battleship}
            experienceList={experienceList2}
          />
          <WorkExperience
            name="ASUCLA"
            role="Customer Service Supervisor"
            to_link="https://github.com/artySapa/Battleship"
            img_link={battleship}
            experienceList={experienceList3}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}
