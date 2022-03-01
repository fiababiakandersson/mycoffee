import { CSSProperties } from "react";
import { Coffee } from "./App";
import CoffeeCard from "./CoffeeCard";

interface Props {
  coffees: Coffee[];
  likedCoffee: string[];
  onLikeChange: (id: string) => void;
}

function SavedCoffeeList(props: Props) {
  // const thisfunction = (id: string) => {
  //   console.log("hello");
  // };

  // let savedList: Coffee[] = [];
  // let list = localStorage.getItem("likedCoffee");
  // if (list) {
  //   let parsedList: string[] = JSON.parse(list);
  //   for (let i = 0; i < props.coffees.length; i++) {
  //     for (let x = 0; x < parsedList.length; x++) {
  //       if (parsedList[x] === props.coffees[i].id) {
  //         savedList.push(props.coffees[i]);
  //       }
  //       console.log(savedList);
  //     }
  //   }
  // }

  return (
    <div style={rootStyle}>
      {props.coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          data={coffee}
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
  gap: "2rem",
  flexWrap: "wrap",
};

export default SavedCoffeeList;

// same as coffeeList but add filter and check if it's in local storage
