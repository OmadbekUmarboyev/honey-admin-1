import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddProduct } from "./Pages/AddProdct/AddProduct";
import { NotFounded } from "./Pages/NotFounded/NotFounded";
import { Config } from "./Config/Config";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Pages/Home/Home";
import { ProductCard } from "./Components/ProductCard/ProductCard";
import { EditeProduct } from "./Pages/AddProdct/EditeProduct";
import { OrderCard } from "./Components/OrdersCard/OrdersCard";
import { ViewOrder } from "./Components/ViewOrder/ViewOrder";
import { ViewProduct } from "./Components/ViewProduct/ViewProduct";

export function Router() {
  return (
    <>
      <div id="router_container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order_view/:id" element={<ViewOrder />} />
          <Route path="/productView/:id" element={<ViewProduct />} />
          <Route path="/edite-product/:id" element={<EditeProduct />} />
          <Route path="/products" element={<ProductCard />} />
          <Route path="/orders" element={<OrderCard />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="*" element={<NotFounded />} />
        </Routes>
        <Config />
      </div>
    </>
  );
}
