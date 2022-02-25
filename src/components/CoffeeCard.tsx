import { CSSProperties, useState } from "react";
import { coffeeData, Data } from "../data";
import imageImport from "../assets/breve.webp"

interface Props {
  data: Data;
}

function CoffeeCard() {
  const [images] = useState(coffeeData);
  // throw Error("oops222");
  return (
    <div style={rootStyle}>
      <img style={imgStyle} src={imageImport} alt="coffepicture" />
      {/* {images.map((image) => (
        <img src={image.image} alt={image.name}/>
      ))} */}
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
