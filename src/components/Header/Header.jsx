import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/NewsExplorer.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="NewsExplorer" className="header__logo" />
      </Link>
      <Navigation onSignInClick={onSignInClick} />
    </header>
  );
}

export default Header;
