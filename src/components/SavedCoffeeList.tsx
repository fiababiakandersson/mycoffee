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
      <h1 style={titleStyle}>FAVOURITES</h1>
      <div style={cardStyle}>
        {props.likedCoffee.length < 1 ? (
          <h2 style={reminderStyle}>
            Don't you like coffee?
            <br />
            Explore the coffee list and save them here ☕
          </h2>
        ) : (
          props.coffees.map((coffee) => {
            if (props.likedCoffee.includes(coffee.id)) {
              return (
                <CoffeeCard
                  key={coffee.id}
                  coffee={coffee}
                  onLikeChange={() => props.onLikeChange(coffee.id)}
                />
              );
            }
          })
        )}
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  textAlign: "center",
  minHeight: "calc(100vh - 10rem - 100px)",
};

const titleStyle: CSSProperties = {
  fontSize: "2rem",
  fontFamily: "Playfair Display",
  margin: "0",
  paddingBottom: "1rem",
};

const reminderStyle: CSSProperties = {
  fontSize: "1.2rem",
  lineHeight: "2.5rem",
  fontWeight: "200",
};

const cardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  placeContent: "center",
  placeItems: "center",
  gap: "2rem",
  flexWrap: "wrap",
};

export default SavedCoffeeList;

// same as coffeeList but add filter and check if it's in local storage
