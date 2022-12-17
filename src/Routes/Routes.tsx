import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";

import Login from "../components/Login";
import Register from "../components/Register";
import { CartProvider } from "../context/CartContext";
import ProtectedRoutes from "./ProtectedRoutes";

const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/home"
          element={
            <CartProvider>
              <Home />
            </CartProvider>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesComponents;
