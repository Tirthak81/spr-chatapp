// UserContext.js
import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        const limitedData = data.users.slice(0, 9).map((user) => ({
          id: user.id,
          username: user.username,
          password: user.password,
          firstname: user.firstName,
          lastname: user.lastName,
          image: user.image,
        }));

        setUsersData(limitedData);
        console.log("from context", limitedData); // Log the correct data here
      })
      .catch((err) => console.log("Failed to load users"));
  }, []);

  return (
    <UserContext.Provider value={{ usersData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
