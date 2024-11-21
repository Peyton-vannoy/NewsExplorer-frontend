import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/NewsExplorer.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onSignInClick, onSignOutClick, isLoggedIn }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="NewsExplorer" className="header__logo" />
      </Link>
      <Navigation
        onSignInClick={onSignInClick}
        onSignOutClick={onSignOutClick}
        isLoggedIn={isLoggedIn}
      />
    </header>
  );
}

export default Header;
