import React, { useEffect, useState } from "react";
import "./chatlist.css";

function ChatList({ onUserClick }) {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.users.slice(0, 9);
        setUsers(limitedData.filter((user) => user.id !== loggedInUser?.id));
      })
      .catch((err) => console.log("Failed to load users"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (user) => {
    onUserClick(user);
  };

  return (
    <div className="chatlist">
      {users.map((user) => (
        <div key={user.id} className="chat" onClick={() => handleClick(user)}>
          <img src={user.image} alt="DP" />
          <div className="userchatinfo">
            <span>
              {`${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`}
            </span>
            <p>last message</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
