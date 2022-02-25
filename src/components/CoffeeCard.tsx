import { CSSProperties, useState } from "react";
import { coffeeData, Data } from "../data";
import imageImport from "../assets/breve.webp"
import HeartIcon from "./HeartIcon";

interface Props {
  data: Data;
}

function CoffeeCard(props:Props) {
  const [images] = useState(coffeeData);
  // throw Error("oops222");
  return (
    <div style={rootStyle}>
      <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <p>{props.data.ingredients}</p>
      <p>{props.data.id}</p>
      <img src={props.data.image} alt={props.data.name} />
      <HeartIcon isLiked={true} />
    </div>
  );
}

const rootStyle: CSSProperties = {
  background: "yellow",
  height: "400px",
  width: "300px",
  flexFlow: "column wrap",
};

const imgStyle: CSSProperties = {
  width: '20rem',
  height: '23rem'
}

export default CoffeeCard;
