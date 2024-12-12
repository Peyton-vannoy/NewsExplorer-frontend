import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy;2024 Supersite, Powered by News API
        </p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li>
              <a
                href="https://tripleten.com"
                target="_blank"
                className="footer__link"
              >
                TripleTen
              </a>
            </li>
          </ul>
          <ul className="footer__icons">
            <li>
              <a
                href="https://github.com/Peyton-vannoy"
                target="_blank"
                className="footer__icon"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/peyton.vannoy19"
                target="_blank"
                className="footer__icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
