import React from 'react';
import "./Header.css";
import headerLogo from "../../assets/logo.png";

function Header() {
  // Event handler to trigger animation
  const animateButton = (e) => {
    e.preventDefault();

    // Access the button element
    const button = e.target;

    // Reset animation
    button.classList.remove('animate');

    // Add animation class
    button.classList.add('animate');

    // Remove animation class after 700ms
    setTimeout(() => {
      button.classList.remove('animate');
    }, 700);
  };

  return (
    <header className="header">
      <img src={headerLogo} alt="App logo" className="header__logo" />
      <button
        className="header__booking-btn bubbly-button" // Add bubbly-button class for animation
        onClick={animateButton} // Bind animateButton on click
      >
        Schedule a Visit
      </button>
      <div className="header__menu-container">
        <p className="header__about">About</p>
      </div>
    </header>
  );
}

export default Header;
