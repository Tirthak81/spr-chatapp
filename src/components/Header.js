import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const currentuser = JSON.parse(localStorage.getItem("loggedInUser"));
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div className="header">
      <div className="profile">
        <img src={currentuser.image} alt="DP" />
        <h4>{`${currentuser.firstname.toUpperCase()} ${currentuser.lastname.toUpperCase()}`}</h4>
      </div>
      <h1>ChatApp</h1>
      <i className="bx bx-power-off" onClick={handleLogOut}></i>
    </div>
  );
}

export default Header;
