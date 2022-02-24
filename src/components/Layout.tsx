import { CSSProperties } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div style={rootStyle}>
            <Header />
            <Navbar />
            <Outlet />
        </div>
    )
};


const rootStyle: CSSProperties = {

};

export default Layout;