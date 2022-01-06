import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";

const FruitsPage = () => {
  return (
    <div>
      <h1>Fruits</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/fruits/*" element={<FruitsPage />} />
      </Routes>
    </div>
  );
}

export default App;
