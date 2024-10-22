import React from "react";
import authorImage from "../../assets/authorPlaceholder.png";
import "./About.css";
function About() {
  return (
    <section className="about">
      <div className="about__content">
        <img src={authorImage} alt="author" className="about__image" />
        <h2 className="about__title">About the author</h2>
      </div>
    </section>
  );
}

export default About;
