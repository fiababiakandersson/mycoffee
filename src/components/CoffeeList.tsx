import CoffeeCard from "./CoffeeCard";
import { CSSProperties, useState } from "react";
import { Coffee } from "./App";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

interface Props {
  coffees: Coffee[];
  onLikeChange: (id: string) => void;
}

// Filters coffees depending on searchbar
function CoffeeList(props: Props) {
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>(
    props.coffees
  );

  return (
    <div style={rootStyle}>
      <SearchBar coffees={props.coffees} onFiltered={setFilteredCoffees} />
      {filteredCoffees.length < 1 ? (
        <h2 style={reminderStyle}>No matches</h2>
      ) : (
        <div style={cardStyle}>
          {filteredCoffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              coffee={coffee}
              onLikeChange={() => props.onLikeChange(coffee.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const rootStyle: CSSProperties = {
  textAlign: "center",
  minHeight: "calc(100vh - 10rem - 100px)",
};

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "1rem 2rem",
  flexWrap: "wrap",
  paddingBottom: "2rem",
};

const reminderStyle: CSSProperties = {
  fontSize: "1.2rem",
  lineHeight: "2.5rem",
  fontWeight: "200",
  textAlign: "center",
};

export default CoffeeList;
