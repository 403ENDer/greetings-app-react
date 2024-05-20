import React, { useState } from "react";
import "./App.css";

function GreetingsApp() {
  const [name, setName] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const currentTime = new Date().getHours();
    let greeting = "";

    if (name.trim() !== "") {
      if (currentTime >= 5 && currentTime < 12) {
        greeting = `Good morning, ${name}!`;
      } else if (currentTime >= 12 && currentTime < 18) {
        greeting = `Good afternoon, ${name}!`;
      } else {
        greeting = `Good evening, ${name}!`;
      }
      setGreetingMessage(greeting);
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div className="container">
      <div className="bottombox">
        <h1>Get greeted!</h1>
      </div>
      {greetingMessage ? (
        <div className="content">
          <p className="neonText">{greetingMessage}</p>
        </div>
      ) : (
        <div>
          <form className="content" onSubmit={handleSubmit}>
            <h2 htmlFor="name" className="neonText">
              ENTER YOUR NAME
            </h2>
            <input
              type="text"
              autoComplete="off"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="input"
            />
            <div
              className="inputBorder"
              onClick={() => document.getElementById("name").focus()}
            ></div>
            <br />
            <br />
            {/* <button type="submit" className="button btn-3">
              <span className="btn-txt">SUBMIT</span>
            </button> */}
          </form>
          <div>
            <p className="neonText">Other content goes here...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GreetingsApp;
