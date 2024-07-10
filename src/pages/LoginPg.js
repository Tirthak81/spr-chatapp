import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./loginpg.css";
import UserContext from "./UserContext"; // Assuming UserContext.js is in the same directory

function LoginPg() {
  const { usersData } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const currentUser = usersData.find((user) => user.username === username);
    if (currentUser) {
      if (currentUser.password === password) {
        alert("Log in successful!");
        setUsername("");
        setPassword("");
        localStorage.setItem("loggedInUser", JSON.stringify(currentUser));
        navigate("/HomePg");
      } else {
        alert("Invalid password!");
      }
    } else {
      alert("Invalid username!");
    }
  }

  return (
    <div className="login-box">
      <p>Log-in</p>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Enter your username :</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Enter your password :</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPg;
