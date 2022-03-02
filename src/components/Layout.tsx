import { CSSProperties } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { Coffee } from "./App";
import Footer from "./Footer";

interface Props {
  
}

function Layout(props: Props) {
  const navigate = useNavigate();
  return (
    <div style={rootStyle}>
      <Header />
      <ErrorBoundary onGoBack={() => navigate("/")}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {};

export default Layout;
