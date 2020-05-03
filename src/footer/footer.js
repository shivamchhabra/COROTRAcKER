import React from "react";
import insta from "./instagram.jpg";
import github from "./github.png";
import link from "./linkedin.jpg";

const footer = () => {
  return (
    <React.Fragment>
      <hr color="grey" />
      <center>
        <h4>...Made By...</h4>
      </center>
      <center>
        <h4>SHIVAM CHHABRA</h4>
      </center>
      <hr color="grey" />
      <center>
        <h4>E-mail:- shivamchhabra35@gmail.com</h4>
      </center>
      <hr color="grey" />
      <a href="https://www.instagram.com/chhabra_shivam_/">
        <img src={insta} alt="insta" />
      </a>
      <a href="https://github.com/shivamchhabra">
        <img src={github} alt="git" />
      </a>
      <a href="https://www.linkedin.com/in/shivam-chhabra-160104152">
        <img src={link} alt="Linkedin" />
      </a>
    </React.Fragment>
  );
};

export default footer;
