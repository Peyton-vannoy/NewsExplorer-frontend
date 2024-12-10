import authorImage from "../../assets/authorPicture.avif";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <img src={authorImage} alt="author" className="about__image" />
        <div className="about__author-text">
          <h2 className="about__title">About the author</h2>
          <p className="about__paragraph">
            Hi, I'm Peyton! I'm a passionate web developer with a love for
            creating engaging and user-friendly applications. This news explorer
            website is my final project for the TripleTen coding bootcamp. It
            showcases my skills in React, JavaScript, working with APIs, and
            responsive web design.
            <br />
            <br />I have learned a lot about web development and design through
            Triple Ten. I have skills in HTML, CSS, JavaScript and React for the
            front-end, and Node.js, Express, and MongoDB for the back-end.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
