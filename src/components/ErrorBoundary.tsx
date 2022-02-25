import React, { Component, CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
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

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <div style={errorStyle}>{this.state.message}</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

const errorStyle: CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "5rem",
};

// search bar
// 404 page not found
