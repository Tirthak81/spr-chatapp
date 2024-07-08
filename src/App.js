import React from "react";
import "./App.css";
import LoginPg from "./pages/LoginPg";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPg />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
