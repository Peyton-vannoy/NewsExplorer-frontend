import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/logoutIcon.svg";
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
      </nav>
      {/* <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        isLoggedIn={isLoggedIn}
        onSignOutClick={onSignOutClick}
        onSignInClick={onSignInClick}
      /> */}
    </>
  );
}

export default Navigation;
