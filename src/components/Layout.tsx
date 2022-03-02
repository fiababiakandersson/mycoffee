import { Outlet, useNavigate } from "react-router-dom";
import ErrorBoundary from "./shared/ErrorBoundary";
import Header from "./Header";
import Footer from "./Footer";
import { CSSProperties } from "react";

function Layout() {
  const navigate = useNavigate();
  return (
    <div style={layoutStyle}>
      <Header />
      <ErrorBoundary onGoBack={() => navigate("/")}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

const layoutStyle: CSSProperties = {
  position: "relative",
};

export default Layout;
