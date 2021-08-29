import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <form className="form">
        {/* <Form type="text" placeholder="username" />
        <Form type="password" placeholder="password" />
        <Form type="password" placeholder="confirm" />
        <Login register="login" /> */}
        {userIsRegistered ? (
          <div>
            <Form type="text" placeholder="username" />
            <Form type="password" placeholder="password" />
            {/* <Form type="password" placeholder="confirm" /> */}
            <Login register="login" />
          </div>
        ) : (
          <div>
            <Form type="text" placeholder="username" />
            <Form type="password" placeholder="password" />
            <Form type="password" placeholder="confirm Password" />
            <Login register="Register" />{" "}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
