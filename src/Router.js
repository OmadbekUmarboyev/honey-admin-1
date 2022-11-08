import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./Pages/AppProdct/AddProduct"
import { Orders } from "./Pages/Orders/Orders";
import { OrderView } from "./Pages/OrderView/OrderView"
import { NotFounded } from "./Pages/NotFounded/NotFounded";
// import { Config } from "./Config/Config"
import { Navbar } from "./Components/Navbar/Navbar"
import { Home } from "./Pages/Home/Home"


export function Router() {

    return (
        <>
            <div id="router_container">
                <div>
                    <Navbar />
                </div>
                <div id="router_pages">
                    <Routes >
                        <Route path="/" element={<Home />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/orderView/:id" element={<OrderView />} />
                        <Route path="/addProduct" element={<AddProduct />} />
                        <Route path="*" element={<NotFounded />} />
                    </Routes>
                </div>
            </div>
            {/* <Config /> */}
        </>
    );
}
