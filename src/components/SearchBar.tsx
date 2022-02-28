import { Link } from "react-router-dom";
import Logo from "../assets/Coffeebean.png";
import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="section search">
      <div className="coffeebean-logo">
        <Link to="/">
          <img src={Logo} alt="mycoffee logo" className="logo" />
        </Link>
      </div>
      <form className="search-form">
        <div className="form">
          <label htmlFor="name">What do you feel like today?</label>
          <input type="text"
          />
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
