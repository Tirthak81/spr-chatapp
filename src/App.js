import React from "react";
import "./App.css";
import LoginPg from "./pages/LoginPg";
import HomePg from "./pages/HomePg";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./pages/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPg />} />
          <Route path="/Homepg" element={<HomePg />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
