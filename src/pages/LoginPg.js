import React from "react";
import "./loginpg.css";

function LoginPg() {
  return (
    <div className="login-box">
      <p>Log-in</p>
      <form action="login-form">
        <label htmlFor="username">Enter your username :</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="password">Enter your password :</label>
        <input type="password" name="password" id="password" required />
        <div className="login-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPg;
