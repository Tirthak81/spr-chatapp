import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loginpg.css";

function LoginPg() {
  const [userData, setUserData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data.users))
      .catch((err) => console.log("Failed to load users"));
  }, []);

  function handleLogin(event) {
    event.preventDefault();
    const currentUser = userData.find((user) => user.username === username);
    if (currentUser) {
      if (currentUser.password === password) {
        alert("Log in successful!");
        setUsername("");
        setPassword("");
        navigate("/Navbar");
      } else {
        alert("Invalid password!");
      }
    } else {
      alert("Invalid username!");
    }
  }

  return (
    <div className="App">
      <div className="login-box">
        <p>Log-in</p>
        <form action="login-form" onSubmit={handleLogin}>
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
    </div>
  );
}

export default LoginPg;
