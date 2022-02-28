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
      <HeartIcon
        isLiked={props.data.isLiked}
        onLiked={() => props.onLikeChange()}
      />
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

export default CoffeeCard;
