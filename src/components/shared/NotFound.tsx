import { CSSProperties } from "react";
import errorImg from "../../assets/error-coffee.webp";
import BackButton from "./BackButton";

function NotFound() {
  return (
    <div style={rootStyle}>
      <h1>Oops!</h1>
      <img style={imgStyle} src={errorImg} alt="spilled coffee" />
      <h2>This page doesn't seem to exist.</h2>
      <BackButton content="Back" />{" "}
    </div>
  );
}

const rootStyle: CSSProperties = {
  minHeight: "calc(100vh - 10rem - 100px)",
  display: "flex",
  flexDirection: "column",
  placeContent: "center",
  placeItems: "center",
  color: "#642801",
};

const imgStyle: CSSProperties = {
  width: "300px",
  marginTop: "-1.5rem",
};
export default NotFound;
