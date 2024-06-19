import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Everything from "../Everything/Everything";
import ProjectPage from "../FullProjects/Projects";
import AboutMe from "../AboutMe/AboutMe";

export default function NavBar() {
  return (
    <Router>
      <div id="navigations">
        <div id="navigation">
          <div className="headerLinks">
            <Link class="link" to="/">
              Home
            </Link>
            <Link class="link" to="/projects">
              Projects
            </Link>
            <Link
              class="link"
              to="/#workexp"
              onClick={() => {
                const targetElement = document.getElementById("workexp");
                if (targetElement) {
                  const topOffset = targetElement.offsetTop - 200; // subtract 300 pixels
                  window.scrollTo({
                    top: topOffset,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Work Experience
            </Link>
            <Link class="link" to="/abtme">
              About Me
            </Link>
          </div>
        </div>
      </div>

      <div id="content">
        <Routes>
          <Route path="/" element={<Everything />}></Route>
          <Route path="/projects" element={<ProjectPage />}></Route>
          <Route path="/abtme" element={<AboutMe />}></Route>{" "}
        </Routes>
      </div>
    </Router>
  );
}
