import React, { useContext, useEffect, useState } from "react";
import "./chatlist.css";
import UserContext from "../pages/UserContext";

function ChatList({ onUserClick }) {
  const { usersData } = useContext(UserContext);
  const [otherUsers, setOtherUsers] = useState([]);
  const loggedInUser = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (usersData && loggedInUser) {
      const filteredUsers = usersData.filter(
        (user) => user.id !== loggedInUser.id
      );
      setOtherUsers(filteredUsers);
      console.log("start", usersData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (user) => {
    onUserClick(user);
  };

  return (
    <div className="chatlist">
      {otherUsers.length > 0 ? (
        otherUsers.map((user) => (
          <div key={user.id} className="chat" onClick={() => handleClick(user)}>
            <img src={user.image} alt="DP" />
            <div className="userchatinfo">
              <span>{`${user.firstname.toUpperCase()} ${user.lastname.toUpperCase()}`}</span>
              <p>last message</p>
            </div>
          </div>
        ))
      ) : (
        <p>No users available</p>
      )}
    </div>
  );
}

export default ChatList;
