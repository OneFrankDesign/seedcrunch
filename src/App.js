import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
