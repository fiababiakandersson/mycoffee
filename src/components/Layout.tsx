import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

function Layout() {
    return (
        <div style={rootStyle}>
            <Header />
            <Main />
            <Outlet />
        </div>
    )
};


const rootStyle: CSSProperties = {

};

export default Layout;