import React from "react";

function Message({ messages }) {
  return (
    <>
      {messages.map((msg, idx) => (
        <p key={idx}>{msg}</p>
      ))}
    </>
  );
}

export default Message;
