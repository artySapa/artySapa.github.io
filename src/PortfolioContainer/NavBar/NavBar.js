import React from "react";
import "./NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Everything from "../Everything/Everything";
import ProjectPage from "../FullProjects/Projects";

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
            <Link class="link" to="/workexp">
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
          <Route path="/projects" element={<ProjectPage />}></Route>{" "}
          {/* HERE YOU INSERT THE NEW PAGES FOR SEPARATE WORK EXPERIENCES WITH VIDEOS AND MORE DETAIL */}
        </Routes>
      </div>
    </Router>
  );
}
