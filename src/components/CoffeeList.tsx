// import { Outlet } from "react-router-dom"
// import { coffeeData, Data } from "../data";
import CoffeeCard from "./CoffeeCard";
import { Component, CSSProperties } from "react";
import { JSONValues } from "./App";
// import { newData, JSONValues } from "./App";

interface Props {
  newData: JSONValues;
}

interface State {
  coffees: JSONValues;
}

class CoffeeList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coffees: this.props.newData,
    };
  }

  render() {
    return (
      <div style={rootStyle}>
        {this.state.coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} data={coffee} />
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
