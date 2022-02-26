import { CSSProperties, useState } from "react";
import { coffeeData, Data } from "../data";
import HeartIcon from "./HeartIcon";

interface Props {
  data: Data;
}

function CoffeeCard(props:Props) {
  const [images] = useState(coffeeData);
  // throw Error("oops222");
  return (
    <div style={rootStyle}>
      <img style={imgStyle}src={props.data.image} alt={props.data.name} />
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <p>{props.data.ingredients}</p>
      <p>{props.data.id}</p>
      <HeartIcon isLiked={true} />
    </div>
  );
}

const rootStyle: CSSProperties = {
  background: "none",
  height: "100%",
  width: "300px",
  flexFlow: "column wrap",
};

const imgStyle: CSSProperties = {
  width: '12rem',
}

export default CoffeeCard;
