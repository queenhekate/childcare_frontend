import React from 'react';
import "./Header.css";
import headerLogo from "../../assets/seashell.png";

function Header() {
  const animateButton = (e) => {
    e.preventDefault();
    const button = e.target;
    button.classList.remove('animate');
    button.classList.add('animate');
    setTimeout(() => {
      button.classList.remove('animate');
    }, 700);
  };
  return (
    <header className="header">
      <div className="header__logo-container">
      <img src={headerLogo} alt="App logo" className="header__logo" />
      <p className="header__logo-text">Child of Nature Daycare</p>
      </div>
      <button
        className="main__booking-btn bubbly-button" // Add bubbly-button class for animation
        onClick={animateButton} // Bind animateButton on click
      >
        Tuition and Openings
      </button>
      <div className="header__menu-container">
        <p className="header__menu-text">About Us</p>
        <p className="header__menu-text">Curriculum</p>
        <p className="header__menu-text">FAQ</p>
        <p className="header__menu-text">For Parents</p>
      </div>
    </header>
  );
}

export default Header;
