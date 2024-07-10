import React from "react";
import "./message.css";

function Message({ messages, user, loggedInUser }) {
  const filteredMessages = messages.filter((msg) => {
    return (
      ((!loggedInUser.id || msg.senderId === loggedInUser.id) &&
        (!user.id || msg.receiverId === user.id)) ||
      ((!loggedInUser.id || msg.senderId === user.id) &&
        (!user.id || msg.receiverId === loggedInUser.id))
    );
  });

  return (
    <div className="msgs">
      {filteredMessages.map((msg) =>
        msg.senderId === loggedInUser.id && msg.receiverId === user.id ? (
          <p key={msg.id} className="sentMessage">
            {msg.content}
          </p>
        ) : (
          <p key={msg.id} className="recivedMessage">
            {msg.content}
          </p>
        )
      )}
    </div>
  );
}

export default Message;
