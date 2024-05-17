import React, { useState } from "react";
import "./App.css";

function GreetingsApp() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setGreeting(`Hello, ${name}! Welcome to the Greetings App!`);
    } else {
      setGreeting("Please enter your name.");
    }
  };

  return (
    <div className="greetings-container">
      <h1 className="title">Welcome to the Greetings App!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="label">
          Enter your name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      {greeting && <h2 className="greeting">{greeting}</h2>}
    </div>
  );
}

export default GreetingsApp;
