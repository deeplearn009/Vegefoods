import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "../pages/home/Home.jsx";
import Layout from "../layout/Layout.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Wishlist from "../pages/wishlist/Wishlist.jsx";
import Admin from "../pages/admin/Admin.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                    <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router
