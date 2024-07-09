import React from "react";
import "./homepg.css";
import Header from "../components/Header";
import ChatPg from "../components/ChatPg";

function HomePg() {
  return (
    <div className="homepg">
      <Header />
      <ChatPg />
    </div>
  );
}

export default HomePg;
