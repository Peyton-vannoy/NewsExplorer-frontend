import React from "react";
import logo from "../../assets/logo.svg";
function MobileMenu() {
  return (
    <div className="mobile__menu">
      <div className="mobile__menu-overlay">
        <div className="mobile__menu-container">
          <ul className="mobile__menu-links">
            <li className="mobile__menu-logo">
              <img src={logo} alt="logo" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
