// import { Outlet } from "react-router-dom"
import CoffeeCard from "./CoffeeCard";
import { coffeeData, Data } from "../data";
import { Component, CSSProperties } from "react";
import ErrorBoundary from "./ErrorBoundary";

interface Props {}

interface State {
  coffees: Data[];
}

class CoffeeList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coffees: coffeeData,
    };
  }

  render() {
    return (
      <ErrorBoundary>
        <div style={rootStyle}>
          {this.state.coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} data={coffee} />
          ))}
        </div>
      </ErrorBoundary>
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
