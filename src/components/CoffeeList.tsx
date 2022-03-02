import CoffeeCard from "./CoffeeCard";
import { CSSProperties, useState } from "react";
import { Coffee } from "./App";
import SearchBar from "./SearchBar";

interface Props {
  coffees: Coffee[];
  onLikeChange: (id: string) => void;
}

function CoffeeList(props: Props) {
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>(props.coffees);

  return (
    <div style={rootStyle}>
      <SearchBar coffees={props.coffees} onFiltered={setFilteredCoffees} />
      <div style={rootStyle}>
        {filteredCoffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            data={coffee}
            onLikeChange={() => props.onLikeChange(coffee.id)}
          />
        ))}
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "1rem 2rem",
  flexWrap: "wrap",
  paddingBottom: "10rem",
};

export default CoffeeList;
