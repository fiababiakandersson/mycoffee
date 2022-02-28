import CoffeeCard from "./CoffeeCard";
import { Component, CSSProperties } from "react";
import { JSONValues } from "./App";

interface Props {
  newData: JSONValues;
}

interface State {
  coffees: JSONValues;
  likedCoffeeArr: number[];
}

class CoffeeList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coffees: this.props.newData,
      likedCoffeeArr: JSON.parse(localStorage.likedCoffee || "[]"),
    };
  }

  updateLS = (arr: number[]) => {
    localStorage.likedCoffee = JSON.stringify(arr);
  };

  updateLike = (id: number) => {
    const arr = this.state.likedCoffeeArr;
    const coffeeIndex = arr.indexOf(id);
    if (coffeeIndex !== -1) {
      // as long as not -1, it means the item exists in the array
      arr.splice(coffeeIndex, 1); // remove
    } else {
      arr.push(id); // add
    }
    this.updateLS(arr);
  };

  render() {
    return (
      <div style={rootStyle}>
        {this.state.coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            data={coffee}
            onLikeChange={() => this.updateLike(coffee.id)}
          />
        ))}
      </div>
    );
  }
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "2rem",
  flexWrap: "wrap",
};

export default CoffeeList;
