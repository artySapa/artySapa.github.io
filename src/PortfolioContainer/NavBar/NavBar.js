import React from "react";

import "./NavBar.css";

import { Button } from "@mui/material";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Home/Home";

import Everything from "../Everything/Everything";

export default function NavBar() {
  return (
    <Router>
      <div id="navigations">
        <div id="navigation">
          <div className="headerLinks">
            <Link class="link" to="/">
              Home
            </Link>
            <Link class="link" to="/battleship">
              Battleship
            </Link>
            <Link class="link" to="/sorting">
              Sorting
            </Link>
            <Link class="link" to="/rps">
              Rock Paper Scissors
            </Link>
          </div>
        </div>
      </div>

      <div id="content">
        <Routes>
          <Route path="/" element={<Everything />}></Route>
        </Routes>
      </div>

    </Router>
  );
}
