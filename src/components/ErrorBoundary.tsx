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
          {console.log(this.state.hasError)}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const rootStyle: CSSProperties = {
  minHeight: "30rem",
  textAlign: "center",
  color: "#642801",
};

const titleStyle: CSSProperties = {
  color: "#642801",
};

const imgStyle: CSSProperties = {
  width: "300px",
  marginTop: "-1.5rem",
};

const buttonStyle: CSSProperties = {
  fontFamily: "Montserrat",
  background: "#3D2314",
  color: "white",
  textTransform: "capitalize",
  fontWeight: "bold",
  fontSize: "1rem",
  padding: ".8rem 1rem",
  borderRadius: "10px",
  border: "none",
  marginTop: "1rem",
};

// search bar
// 404 page not found
