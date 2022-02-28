import { Component, CSSProperties, ErrorInfo, ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

const handleClick = (state: State) => {
  state.hasError = false;
  console.log(state.hasError);
};

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

  render() {
    if (this.state.hasError) {
      return (
        <div style={rootStyle}>
          <div style={errorStyle}>{this.state.message}</div>
          <button onClick={() => handleClick(this.state)}> back to Home</button>
          {console.log(this.state.hasError)};
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const rootStyle: CSSProperties = {
  minHeight: "25rem",
  textAlign: "center",
};

const errorStyle: CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginTop: "5rem",
};

// search bar
// 404 page not found
