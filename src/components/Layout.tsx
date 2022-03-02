import { Outlet, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <ErrorBoundary onGoBack={() => navigate("/")}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default Layout;
