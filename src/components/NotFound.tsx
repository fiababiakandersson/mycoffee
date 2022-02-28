import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../assets/error-coffee.webp";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div style={rootStyle}>
      <h1>Oops!</h1>
      <img style={imgStyle} src={errorImg} alt="spilled coffee" />
      <h2>This page doesn't seem to exist.</h2>
      <button onClick={handleClick}>back to Home</button>
    </div>
  );
}

const rootStyle: CSSProperties = {
  minHeight: "25rem",
  textAlign: "center",
  color: "#642801",
};

const imgStyle: CSSProperties = {
  width: "300px",
  marginTop: "-1.5rem",
};
export default NotFound;
