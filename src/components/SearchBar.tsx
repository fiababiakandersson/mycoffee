import { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Coffeebean.png";
import { Coffee } from "./App";
import "./SearchBar.css";

interface Props {
  coffees: Coffee[];
  onFiltered: (filteredCoffees: Coffee[]) => void;
}


function SearchBar(props: Props) {
  const filterCoffees = (e: ChangeEvent<HTMLInputElement>) => {
    const result = props.coffees.filter(coffee => coffee.title.toLowerCase().includes(e.target.value.toLowerCase()));
    props.onFiltered(result);
  }
  
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
          <input type="text" onChange={filterCoffees}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
