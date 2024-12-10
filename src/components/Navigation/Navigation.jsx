import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/logoutIcon.svg";
import hamburgerIcon from "../../assets/mobileMenuBtn.png";
import closeIcon from "../../assets/closeButton.svg";
import logo from "../../assets/NewsExplorer.svg";
import "./Navigation.css";

function Navigation({ onSignInClick, onSignOutClick, isLoggedIn, isDark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClass = `navigation__link ${isDark ? "navigation__link_dark" : ""}`;
  const buttonClass = `navigation__button ${
    isDark ? "navigation__button_dark" : ""
  }`;
  const logoutIconClass = `navigation__logout-icon ${
    isDark ? "navigation__logout-icon_dark" : ""
  }`;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navigation">
        <NavLink to="/" className={linkClass} end>
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/saved-news"
              className={`${linkClass} navigation__link-saved`}
            >
              Saved articles
            </NavLink>
            <button
              className={`${buttonClass} navigation__button-logout`}
              onClick={onSignOutClick}
            >
              Peyton
              <img
                src={logoutIcon}
                alt="Logout Button"
                className={logoutIconClass}
              />
            </button>
          </>
        ) : (
          <button className={buttonClass} onClick={onSignInClick}>
            Sign in
          </button>
        )}

        <button className="navigation__hamburger" onClick={toggleMobileMenu}>
          <img
            src={hamburgerIcon}
            alt="hamburger"
            className={`navigation__hamburger ${
              isDark ? "navigation__hamburger-dark" : ""
            }`}
          />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="navigation__mobile-menu">
          <div className="navigation__mobile-header">
            <img src={logo} alt="NewsExplorer" />
            <button
              className="navigation__mobile-close"
              onClick={toggleMobileMenu}
            >
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <div className="navigation__mobile-menu-container">
            <div className="navigation__mobile-menu-links">
              <NavLink to="/" className="navigation__mobile-link" end>
                Home
              </NavLink>
              {isLoggedIn ? (
                <>
                  <NavLink to="/saved-news" className="navigation__mobile-link">
                    Saved articles
                  </NavLink>
                </>
              ) : (
                <button className={buttonClass} onClick={onSignInClick}>
                  Sign in
                </button>
              )}
              <button
                className="navigation__mobile-button navigation__mobile-button-logout"
                onClick={() => {
                  isLoggedIn ? onSignOutClick() : onSignInClick();
                  toggleMobileMenu();
                }}
              >
                {isLoggedIn ? (
                  <>
                    Peyton
                    <img
                      src={logoutIcon}
                      alt="Logout Button"
                      className="navigation__mobile-logout-icon"
                    />
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
