import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Coffee } from "./App";
import HeartIcon from "./HeartIcon";

interface Props {
  coffee: Coffee;
  onLikeChange: () => void;
}

/** shows image, title and like button for all the coffeecards in coffeelist */
function CoffeeCard(props: Props) {
  return (
    <div style={rootStyle}>
      <Link to={`/cards/${props.coffee.id}`}>
        <img
          style={imgStyle}
          src={props.coffee.image}
          alt={props.coffee.title}
        />
      </Link>
      <div style={titleContainerStyle}>
        <h3 style={titleStyle}>{props.coffee.title}</h3>
      </div>
      <HeartIcon
        isLiked={props.coffee.isLiked}
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

const titleStyle: CSSProperties = {
  fontWeight: "200",
};

const titleContainerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default CoffeeCard;
