/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./msgbox.css";
import Message from "./Message";
import { storeMessage, getMessages } from "./MessageService";

const MsgBox = React.memo(({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    // Load messages from storage when component mounts
    const storedMessages = getMessages();
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== "") {
      const message = {
        id: messages.length + 1,
        senderId: loggedInUser.id,
        receiverId: user.id,
        content: newMessage,
      };

      setMessages((prevMessages) => [...prevMessages, message]);

      storeMessage(message);

      setNewMessage("");
    }
  };

  if (!user) {
    return <div className="msgbox"></div>;
  }

  return (
    <div className="msgbox">
      <div className="chatinfo">
        <span>
          {`${user.firstname.toUpperCase()} ${user.lastname.toUpperCase()}`}
        </span>
      </div>
      <Message messages={messages} user={user} loggedInUser={loggedInUser} />
      <div className="typer">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            name="inputmsg"
            id="inputmsg"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">
            <i className="bx bxs-send" />
          </button>
        </form>
      </div>
    </div>
  );
});
export default MsgBox;
