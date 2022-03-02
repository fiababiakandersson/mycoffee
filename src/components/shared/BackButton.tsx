import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  content: string;
}

const BackButton = (props: Props) => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <button style={buttonStyle} onClick={onGoBack}>
      {props.content}
    </button>
  );
};

const buttonStyle: CSSProperties = {
  fontFamily: "Montserrat",
  background: "#3D2314",
  color: "white",
  fontSize: ".9rem",
  padding: ".5rem .8rem",
  borderRadius: "10px",
  border: "none",
  marginTop: "1rem",
  width: "fit-content",
  alignSelf: "center",
  cursor: "pointer",
};

export default BackButton;
