import { CSSProperties } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./NotFound";
import { Coffee } from "./App";

interface Props {
  coffees: Coffee[];
  onFiltered: (filteredCoffees: Coffee[]) => void;
}

function Layout(props: Props) {
  return (
    <div style={rootStyle}>
      <Header />
      <SearchBar coffees={props.coffees} onFiltered={props.onFiltered}/>
      <ErrorBoundary FallbackComponent={NotFound}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

const rootStyle: CSSProperties = {};

export default Layout;
