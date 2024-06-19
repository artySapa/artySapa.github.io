import React from "react";
import "./AboutMe.css";
import { useState } from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import pic1 from "../../assets/Home/profilephoto.jpg";
import pic2 from "../../assets/Home/profilephoto1.jpg";
import pic3 from "../../assets/Home/profilephoto2.jpg";
import pic4 from "../../assets/Home/profilephoto3.jpg";
import pic5 from "../../assets/Home/profilephoto4.jpg"; //hat

import { Button } from "@mui/material";

export default function AboutMe(props) {
  const [image, setImage] = useState(pic1);

  const [index, setIndex] = useState(0);

  const pictures = [pic1, pic2, pic3, pic4, pic5];

  const imageClick1 = () => {
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
    setImage((prevImage) => pictures[index]); // Use functional update with setImage
  };

  const imageClick2 = () => {
    if (index >= pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setImage((prevImage) => pictures[index]); // Use functional update with setImage
  };

  return (
    <div className="about">
      <div className="aboutme-body">
        <div className="abt-pictures-hidden">
            <img
            className="abtmepic2"
            src={pic1}
            alt="Profile"
          ></img>
        </div>
        <div className="abt-pictures">
        <Button
              variant="contained"
              onClick={imageClick1}
              className="project-button"
              sx={{
                padding: "20px",
                height: "30px",
                width: "10px",
                borderRadius: "35%",
                transform: "translateX(19%)",
                backgroundColor: "rgb(252, 91, 91)",
                "&:hover": {
                  backgroundColor: "rgb(200, 91, 91)",
                },
              }}
              startIcon={<ArrowBackIosIcon></ArrowBackIosIcon>}
            ></Button>
          <img
            className="abtmepic"
            src={image}
            alt="Profile"
          ></img>
          <Button
              variant="contained"
              onClick={imageClick2}
              className="project-button"
              sx={{
                padding: "20px",
                height: "30px",
                width: "10px",
                borderRadius: "35%",
                marginLeft: "20px",
                backgroundColor: "rgb(252, 91, 91)",
                "&:hover": {
                  backgroundColor: "rgb(200, 91, 91)",
                },
              }}
              startIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
            ></Button>
        </div>
        <div className="abtme-description">
          <h1 className="hititle">HI!</h1>
          <p>
            My name is Artyom Sapa. I am a Computer Science and Engineering student at
            UCLA.{" "}
          </p>
          <p>
            I am interested in developing full stack web projects. I also enjoy
            C++, AI, mobile applications, as well as API design.{" "}
          </p>
          <p>
            I am currently developing an idea of automated translations for any songs that a user might select using Axios, React, and postgreSQL as the
            ground for the project.{" "}
          </p>
          <p>
            I am really excited about the future of computer science with an
            emerging spheres such as Artificial Intelligence and Quantum
            Computing. {" "}
          </p>
        </div>
      </div>
      <div className="ending">
        <p>
          My main passion about the projects I start is them being applicable to
          all people's lives, as well as pleasant to look at and use on a daily
          basis.{" "}
        </p>
        <p>
          Contact me if you have anything you are interested in to work on
          together, I am more than eager to chat!
        </p>
      </div>
    </div>
  );
}
