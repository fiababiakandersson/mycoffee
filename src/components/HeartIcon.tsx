import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { Component, CSSProperties } from "react";

interface Props {
  isLiked: boolean;
}
interface State {
  liked: boolean;
}
class HeartIcon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { liked: false };
  }

  toggleLike = () => {
    let localLike = this.state.liked;
    localLike = !localLike;
    this.setState({ liked: localLike });
  };

  render() {
    return (
      <FontAwesomeIcon
        onClick={this.toggleLike}
        icon={this.state.liked ? faHeartSolid : faHeartRegular}
        style={heartStyle}
      />
    );
  }
}

const heartStyle: CSSProperties = {
  fontSize: "2rem",
  marginLeft: "1rem",
  color: "red",
};

export default HeartIcon;
