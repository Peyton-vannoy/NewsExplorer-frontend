import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ onSignInClick }) {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link" end>
        Home
      </NavLink>
      <button className="navigation__button" onClick={onSignInClick}>
        Sign in
      </button>
    </nav>
  );
}

export default Navigation;
