import { CSSProperties, useState } from "react";
import { Coffee } from "./App";
import HeartIcon from "./HeartIcon";

interface Props {
  data: Coffee;
  onLikeChange: () => void;
}

interface State {
  liked: boolean;
}

function CoffeeCard(props: Props, state: State) {
  const [liked, setLiked] = useState(false);

  const handleLike = (id: number) => {
    liked ? setLiked(false) : setLiked(true);
    liked ? props.onLikeChange() : props.onLikeChange();
  };

  // throw Error("oops222");
  return (
    <div style={rootStyle}>
      <img style={imgStyle} src={props.data.image} alt={props.data.title} />
      {/* <h1>{props.data.name}</h1>
      <p>{props.data.description}</p>
      <p>{props.data.ingredients}</p> 
      <p>{props.data.id}</p> */}
      <HeartIcon isLiked={liked} onLiked={() => handleLike(props.data.id)} />
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
