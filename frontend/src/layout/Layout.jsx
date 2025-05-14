import React from 'react'
import Header from "../components/header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "../components/footer/Footer.jsx";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout
