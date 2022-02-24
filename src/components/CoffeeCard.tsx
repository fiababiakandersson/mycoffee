import { CSSProperties } from "react";
import Data from "../data";
interface Props {
  props: Props,
  //data: Data
}

function CoffeeCard(props: Props) {
  return (
    <div style={rootStyle}>
      <h1>{props.name}</h1>
      <p>{props.data.description}</p>
      <p>{props.data.ingredients}</p>
      <p>{props.data.id}</p>
    </div>
  );
}

const Coffee = ({})

const rootStyle: CSSProperties = {
  background: "yellow",
  height: "400px",
  width: "300px",
  border: "solid 2px",
  flexFlow: "column wrap",
};

export default CoffeeCard;
