import { title } from "process";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Coffee } from "./App";
import HeartIcon from "./HeartIcon";

interface Props {
  data: Coffee;
  onLikeChange: () => void;
}

function CoffeeCard(props: Props) {
  return (
    <div style={rootStyle}>
      <Link to={`/cards/${props.data.id}`}>
        <img style={imgStyle} src={props.data.image} alt={props.data.title} />
      </Link>
      <div style={titleHeartContainer}>
      <div style={coffeeCardTitle}><h1 style={cardTitle}>{props.data.title}</h1></div>
      <HeartIcon
        isLiked={props.data.isLiked}
        onLiked={() => props.onLikeChange()}
      />
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  position: "relative",
  width: "300px",
  padding: ".5rem 1rem",
  flexFlow: "column wrap",
  cursor: "pointer",
  textAlign: "center",
};

const imgStyle: CSSProperties = {
  height: "350px",
};

const coffeeCardTitle: CSSProperties = {
  color: "#50311f",
  fontSize: '.6rem',
}

const titleHeartContainer: CSSProperties = {
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
}

const cardTitle: CSSProperties = {
  fontFamily: "Montserrat",
  maxWidth: '10rem',
  fontWeight: 200,
  maxHeight: '3rem'
}

export default CoffeeCard;
