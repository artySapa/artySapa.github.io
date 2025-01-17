import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <div className="primary-text">
                Hello, My name is {" "}
                <span className="highlighted-text">
                  Arty
                </span>
              </div>
            </div>
            <div className="profile-details-role">
              <div className="primary-text">
                <h1> Software developer.</h1>
              </div>
            </div>
            <div className="profile-options">
              <button
                className="btn primary-btn"
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
              >
                Contact Me
              </button>
              <a href="./artycv.pdf" download="Arty artycv.pdf">
                <button className="btn highlighted-btn" href="./artycv.pdf">
                  Resume
                </button>
              </a>
            </div>
            <div className="colz">
              <div className="colz-icon">
                <a
                  href="https://www.instagram.com/sapartyom/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sapartyom/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a
                  href="https://github.com/artySapa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
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
