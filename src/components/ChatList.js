import React, { useEffect, useState } from "react";
import "./chatlist.css";

function ChatList() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    setLoggedInUser(JSON.parse(sessionStorage.getItem("user")));
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        // Slice the array to get only the first 9 users
        const limitedData = data.users.slice(0, 9);
        // Set users array after filtering out the loggedInUser
        setUsers(limitedData.filter((user) => user.id !== loggedInUser?.id));
      })
      .catch((err) => console.log("Failed to load users"));
  }, [loggedInUser]);

  return (
    <div className="chatlist">
      {users.map((user) => (
        <div key={user.id} className="chat">
          <img src={user.image} alt="DP" />
          <div className="userchatinfo">
            <span>{user.username}</span>
            <p>chat here</p> {/* Placeholder text or component */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;

// import React from "react";
// import "./chatlist.css";

// function ChatList() {
//   return (
//     <div className="chatlist">
//       {/* repeat this div with classname chat for user mapping */}
//       <div className="chat">
//         <img src="" alt="DP" />
//         <div className="userchatinfo">
//           <span>username</span>
//           <p>chat heree</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatList;
