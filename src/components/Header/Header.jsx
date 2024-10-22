import React from "react";
import Logo from "../../assets/NewsExplorer.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="NewsExplorer" className="header__logo" />
      <Navigation />
    </header>
  );
}

export default Header;
