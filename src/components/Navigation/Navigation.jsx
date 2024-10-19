import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__link" end>
        Home
      </NavLink>
      <button className="navigation__button">Sign in</button>
    </nav>
  );
}

export default Navigation;
