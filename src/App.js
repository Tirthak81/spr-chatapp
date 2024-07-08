import React from "react";
import "./App.css";
import LoginPg from "./pages/LoginPg";
import HomePg from "./pages/HomePg";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPg />} />
        <Route path="/Homepg" element={<HomePg />} />
      </Routes>
    </div>
  );
}

export default App;
