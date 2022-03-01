import CoffeeCard from "./CoffeeCard";
import { CSSProperties } from "react";
import { Coffee } from "./App";

interface Props {
  coffees: Coffee[];
  onLikeChange: (id: string) => void;
}

function CoffeeList(props: Props) {
  return (
    <div style={rootStyle}>
      {props.coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          coffee={coffee}
          onLikeChange={() => props.onLikeChange(coffee.id)}
        />
      ))}
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
