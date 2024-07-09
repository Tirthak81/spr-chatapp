import React, { useState } from "react";
import ChatList from "./ChatList";
import MsgBox from "./MsgBox";

function ChatPg() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="chatpg">
      <ChatList onUserClick={handleUserClick} />
      <MsgBox user={selectedUser} />
    </div>
  );
}

export default ChatPg;
