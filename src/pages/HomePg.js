import React from "react";
import "./homepg.css";
import Header from "../components/Header";
import ChatPg from "../components/ChatPg";

function Navbar() {
  return (
    <div className="homepg">
      <Header />
      <ChatPg />
    </div>
  );
}

export default Navbar;
