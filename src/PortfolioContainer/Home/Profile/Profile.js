import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.instagram.com/sapartyom/" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/sapartyom/" target="_blank" rel="noreferrer">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/artySapa" target="_blank" rel="noreferrer">
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Hello, My name is <span className="highlighted-text">Arty</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1> React developer.</h1>
                <span className="profile-role-tagline">
                  Create beauty with coding.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn"> Hire Me </button>
              <a href="./artycv.pdf" download="Arty artycv.pdf">
                <button className="btn highlighted-btn" href="./artycv.pdf">
                  Get Resume
                </button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
