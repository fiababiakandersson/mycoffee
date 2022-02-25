import { CSSProperties } from "react";
import { Data } from "../data";
import HeartIcon from "./HeartIcon";

interface Props {
  data: Data;
}

function CoffeeCard(props: Props) {
  // throw Error("oops222");
  return (
    <div style={rootStyle}>
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <p>{props.data.ingredients}</p>
      <p>{props.data.id}</p>
      <HeartIcon isLiked={true} />
    </div>
  );
}

const rootStyle: CSSProperties = {
  background: "yellow",
  height: "400px",
  width: "300px",
  border: "solid 2px",
  flexFlow: "column wrap",
};

export default CoffeeCard;
