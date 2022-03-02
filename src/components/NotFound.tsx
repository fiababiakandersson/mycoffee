import { CSSProperties } from "react";
import errorImg from "../assets/error-coffee.webp";
import BackButton from "./shared/BackButton";

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
  minHeight: "25rem",
  textAlign: "center",
  color: "#642801",
  paddingBottom: "6rem",
};

const imgStyle: CSSProperties = {
  width: "300px",
  marginTop: "-1.5rem",
};
export default NotFound;
