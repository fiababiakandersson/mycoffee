/*import { Outlet } from "react-router-dom"
import CoffeeCard from "./CoffeeCard";
import { CSSProperties, useState } from "react";


function CoffeeList(coffeeData) {
  return (
    <div style={rootStyle}>
      {coffeeData.map((coffee) => (
        <CoffeeCard key={coffee.id} data={coffee} />
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

export default CoffeeList;

/*
{coffeeData.map((coffee) => (
        <CoffeeCard key={coffee.id} data={coffee} />
      ))}
*/