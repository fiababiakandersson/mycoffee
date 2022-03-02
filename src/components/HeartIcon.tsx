import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { CSSProperties } from "react";

interface Props {
  onLiked: () => void;
  isLiked: boolean;
}

const HeartIcon = (props: Props) => {
  return (
    <FontAwesomeIcon
      onClick={props.onLiked}
      icon={props.isLiked ? faHeartSolid : faHeartRegular}
      style={heartStyle}
    />
  );
};

const heartStyle: CSSProperties = {
  position: "absolute",
  fontSize: "2rem",
  marginLeft: "1rem",
  color: "#F57777",
  bottom: "1.5rem",
  left: "1rem",
  zIndex: "99",
};

export default HeartIcon;
