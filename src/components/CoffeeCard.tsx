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
      {/* <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <p>{props.data.ingredients}</p> 
      <p>{props.data.id}</p> */}
      <img style={imgStyle} src={props.data.image} alt={props.data.name} />
      <HeartIcon isLiked={true} />
    </div>
  );
}

const rootStyle: CSSProperties = {
  position: "relative",
  //background: "rgba(255,255,0,0.5)",
  width: "300px",
  padding: ".5rem 1rem",
  flexFlow: "column wrap",
  cursor: "pointer",
  textAlign: "center",
};

const imgStyle: CSSProperties = {
  height: "350px",
};

export default CoffeeCard;
