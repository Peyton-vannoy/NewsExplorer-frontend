import React from "react";
import { NavLink } from "react-router-dom";
import logoutIcon from "../../assets/logoutIcon.svg";
import "./Navigation.css";

function Navigation({ onSignInClick, onSignOutClick, isLoggedIn }) {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link" end>
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            to="/saved-news"
            className="navigation__link navigation__link-saved"
          >
            Saved articles
          </NavLink>
          <button
            className="navigation__button navigation__button-logout"
            onClick={onSignOutClick}
          >
            Peyton
            <img
              src={logoutIcon}
              alt="Logout Button"
              className="navigation__logout-icon"
            />
          </button>
        </>
      ) : (
        <button className="navigation__button" onClick={onSignInClick}>
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
