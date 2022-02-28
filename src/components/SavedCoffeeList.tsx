import { CSSProperties, useState } from "react";
import { Coffee } from "./App";
import CoffeeCard from "./CoffeeCard";
interface Props {
  data: Coffee[];
}
function SavedCoffeeList(props: Props) {
  const likedCoffeeArr = localStorage.getItem("likedCoffee");
  console.log(likedCoffeeArr);

  return (
    <div style={rootStyle}>
      {props.data.map((coffee) => (
        <p>{coffee.id}</p>
      ))}
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
