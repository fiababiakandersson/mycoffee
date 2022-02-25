import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
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
      icon={props.isLiked ? faHeartRegular : faHeartSolid}
      style={heartStyle}
    />
  );
}

const handleLike = () => {
  console.log("hello");
};

const heartStyle: CSSProperties = {
  fontSize: "2rem",
  marginLeft: "1rem",
  color: "red",
};

export default HeartIcon;
