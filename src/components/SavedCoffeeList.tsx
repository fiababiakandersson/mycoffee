import { CSSProperties } from "react";
import { Coffee } from "./App";
import CoffeeCard from "./CoffeeCard";

interface Props {
  coffees: Coffee[];
  likedCoffee: string[];
  onLikeChange: (id: string) => void;
}

function SavedCoffeeList(props: Props) {
  return (
    <div style={rootStyle}>
      {props.coffees.map((coffee) => {
        if (props.likedCoffee.includes(coffee.id)) {
          return (
            <CoffeeCard
              key={coffee.id}
              data={coffee}
              onLikeChange={() => props.onLikeChange(coffee.id)}
            />
          );
        }
      })}
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "2rem",
  flexWrap: "wrap",
};

export default SavedCoffeeList;

// same as coffeeList but add filter and check if it's in local storage
