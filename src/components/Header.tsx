import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import './Header.css';

function Header() {
    return (
      <nav className="header">
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
          <li>
            <Link className="responsive-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    );
}

export default Header;
