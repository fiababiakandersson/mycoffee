import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./NotFound";

function Layout() {
  return (
    <div style={rootStyle}>
      <Header />
      <Navbar />
      <ErrorBoundary FallbackComponent={NotFound}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

const rootStyle: CSSProperties = {};

export default Layout;
