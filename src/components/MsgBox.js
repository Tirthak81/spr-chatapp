import React from "react";
import "./msgbox.css";
// import { useState, useEffect, useRef } from "react";

function MsgBox() {
  // const [message, setMessage] = useState([]);
  // const [newMessage, setNewMessage] = useState("");
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // function sentMessage() {
  //   setMessage([...message, newMessage]);
  //   setNewMessage("");
  // }

  return (
    <div className="msgbox">
      <div className="chatinfo">
        <span>username</span>
      </div>
      <div className="msgs">
        {/* {message.map((msg, idx) => {
          return <p key={idx}>{msg}</p>;
        })} */}
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
        <p>message</p>
      </div>
      <div className="typer">
        <input
          type="text"
          name="inputmsg"
          id="inputmsg"
          // value={newMessage}
          // onCange={(e) => setNewMessage(e.target.value)}
        />
        <i className="bx bxs-send"></i>
      </div>
    </div>
  );
}

export default MsgBox;
