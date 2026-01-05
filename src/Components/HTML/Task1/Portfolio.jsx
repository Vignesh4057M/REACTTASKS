



import React from "react";
import img from "../../../assets/vignesh.jpg";

const Portfolio = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Portfolio</h1>

      <p>Welcome to my simple portfolio page created using HTML elements.</p>

      <h2>About Me</h2>
      <p>Hello! I am learning HTML. I enjoy making simple web pages.</p>

      <h2>I AM VIGNESH</h2>
      <img
        src={img}
        alt="VIGNESH"
        height="200"
        width="200"
        style={{ borderRadius: "10px" }}
      />

      <h2>My Projects (Only HTML)</h2>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Services</a></li>
      </ul>

      <h2>Contact Me</h2>
      <p>You can contact through the link below</p>
      <a href="mailto:abcde2001@gmail.com">Send me an email</a>
    </div>
  );
};

export default Portfolio;
