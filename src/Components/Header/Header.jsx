import React from 'react';
import "./Header.css";
import headerLogo from "../../assets/seashell.png";

function Header() {

  return (
    <header className="header">
      <div className="header__logo-container">
      <img src={headerLogo} alt="App logo" className="header__logo" />
      <p className="header__logo-text">Child of Nature</p>
      </div>
      <div className="header__menu-container">
        <p className="header__menu-text">About</p>
        <p className="header__menu-text">Curriculum</p>
        <p className="header__menu-text">FAQ</p>
        <p className="header__menu-text">For Parents</p>
      </div>
    </header>
  );
}

export default Header;
