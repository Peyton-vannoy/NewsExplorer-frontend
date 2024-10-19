import React from "react";
import Logo from "../../assets/NewsExplorer.svg";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="NewsExplorer" className="header__logo" />
      <div className="header__user-container">
        {/* Add Navigation Component here */}
        <button className="header__home-button">Home</button>
        <button className="header__button">Sign in</button>
      </div>
    </header>
  );
}

export default Header;
