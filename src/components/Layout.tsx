import { CSSProperties } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout() {
  const navigate = useNavigate();

  return (
    <div style={rootStyle}>
      <Header />
      <Navbar />
      <ErrorBoundary onGoBack={() => navigate("/")}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

const rootStyle: CSSProperties = {};

export default Layout;
