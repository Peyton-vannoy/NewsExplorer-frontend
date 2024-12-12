import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © 2024 Supersite, Powered by News API
        </p>
        <nav className="footer__nav">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            className="footer__link"
          >
            TripleTen
          </a>

          <a
            href="https://github.com/Peyton-vannoy"
            target="_blank"
            className="footer__icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/peyton.vannoy19"
            target="_blank"
            className="footer__icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
