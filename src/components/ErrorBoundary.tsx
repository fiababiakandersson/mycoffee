import { Component, CSSProperties, ErrorInfo, ReactNode } from "react";
import errorImg from "../assets/error-coffee.webp";

interface Props {
  children: ReactNode;
  onGoBack: () => void;
}

interface State {
  hasError: boolean;
  message: string;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error: " + { error, errorInfo });
  }

  resetState = () => {
    this.setState({ hasError: false });
    this.props.onGoBack();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={rootStyle}>
          <h1 style={titleStyle}>Oops!</h1>
          <img style={imgStyle} src={errorImg} alt="spilled coffee" />
          <h2 style={titleStyle}>This page doesn't seem to exist.</h2>
          <button style={buttonStyle} onClick={this.resetState}>
            Back to Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const rootStyle: CSSProperties = {
  minHeight: "calc(100vh - 10rem - 100px)",
  display: "flex",
  flexDirection: "column",
  placeContent: "center",
  placeItems: "center",
};

const titleStyle: CSSProperties = {
  fontWeight: "200",
};

const imgStyle: CSSProperties = {
  width: "300px",
  marginTop: "-1.5rem",
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
