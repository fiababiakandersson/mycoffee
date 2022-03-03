import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo-div">
        <Link to="/">
          <img src={Logo} alt="mycoffee logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
