import React from "react";
import "./homepg.css";
import Header from "../components/Header";
import MsgBox from "../components/MsgBox";
import ChatList from "../components/ChatList";

function Navbar() {
  return (
    <div className="homepg">
      <Header />
      <div className="chatpg">
        <ChatList />
        <MsgBox />
      </div>
    </div>
  );
}

export default Navbar;
