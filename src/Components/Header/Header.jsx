import "./Header.css"
import headerLogo from "../../assets/logo.png"

function Header() {
    return <header className="header">
        <img src={headerLogo} alt="App logo" className="header__logo" />
        <div className="header__menu-container">
        <p className="header__about">About</p>
        </div>
        <button className="header__booking-btn">Schedule a Visit</button>
    </header>
}

export default Header;