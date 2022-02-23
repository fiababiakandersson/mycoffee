// import { Outlet } from "react-router-dom"
import CoffeeCard from "./CoffeeCard";
import { coffeeData } from "../data";
import { CSSProperties, useState } from "react";

function CoffeeList() {
    const [coffees] = useState(coffeeData); 
    
  return (
    <div style={rootStyle}>
      {coffees.map((coffee) => ( 
            <CoffeeCard key={coffee.id} data={coffee}/>
      ))}
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
}

export default CoffeeList;
