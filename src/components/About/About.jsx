import React from "react";
import authorImage from "../../assets/authorPlaceholder.avif";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <img src={authorImage} alt="author" className="about__image" />
        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <p className="about__paragraph">
            This block describes the author of the site, when he was born, where
            he was born, and where he studied.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
