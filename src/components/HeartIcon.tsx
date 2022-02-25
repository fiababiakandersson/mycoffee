import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";

interface Props {
  isLiked: boolean;
}

function HeartIcon(props: Props) {
  // throw Error("oops222");
  return (
    <FontAwesomeIcon
      onClick={handleLike}
      //onClick={props.isLiked ? true : false}
      icon={faHeart}
      style={props.isLiked ? heartLikedStyle : heartStyle}
    />
  );
}

const handleLike = () => {
  console.log("hello");
};

const heartStyle: CSSProperties = {
  fontSize: "2rem",
  marginLeft: "1rem",
  color: "green",
};

const heartLikedStyle: CSSProperties = {
  fontSize: "2rem",
  marginLeft: "1rem",
  color: "red",
};

export default HeartIcon;
