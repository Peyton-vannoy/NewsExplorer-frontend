import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/NewsExplorer.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onSignInClick, onSignOutClick, isLoggedIn, isDark }) {
  return (
    <header className={`header ${isDark ? "header_dark" : ""}`}>
      <Link to="/">
        <img src={Logo} alt="NewsExplorer" className="header__logo" />
      </Link>
      <Navigation
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}
        isLoggedIn={isLoggedIn}
        isDark={isDark}
      />
    </header>
  );
}

export default Header;
