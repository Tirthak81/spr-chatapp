/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./msgbox.css";
import Message from "./Message";

function MsgBox({ user }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setNewMessage("");
    }
  };

  if (!user) {
    return (
      <div className="msgbox">
        <div className="chatinfo"></div>
        <div className="msgs"></div>
        <div className="typer">
          <input type="text" className="e-input" disabled={true} />
          <i className="bx bxs-send e-input" disabled={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="msgbox">
      <div className="chatinfo">
        <span>
          {`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`}
        </span>
      </div>
      <div className="msgs">
        <Message messages={messages} />
      </div>
      <div className="typer">
        <input
          type="text"
          name="inputmsg"
          id="inputmsg"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <i className="bx bxs-send" onClick={handleSendMessage} />
      </div>
    </div>
  );
}

export default MsgBox;
