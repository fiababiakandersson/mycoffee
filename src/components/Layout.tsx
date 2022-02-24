import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import ErrorBoundary from "./ErrorBoundary";

function Layout() {
  return (
    <div style={rootStyle}>
      <Header />
      <Navbar />
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

const rootStyle: CSSProperties = {};

export default Layout;
