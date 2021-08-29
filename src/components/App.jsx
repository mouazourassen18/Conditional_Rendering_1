import React from "react";
import Form from "./Form";
import Login from "./Login";

var userIsRegistered = false;
function Log() {
  return (
    <div>
      <Form type="text" placeholder="username" />
      <Form type="password" placeholder="password" />
      {/* <Form type="password" placeholder="confirm" /> */}
      <Login register="login" />
    </div>
  );
}
function Reg() {
  return (
    <div>
      <Form type="text" placeholder="username" />
      <Form type="password" placeholder="password" />
      <Form type="password" placeholder="confirm Password" />
      <Login register="Register" />
    </div>
  );
}
function App() {
  return (
    <div className="container">
      <form className="form">{userIsRegistered ? <Log /> : <Reg />}</form>
    </div>
  );
}

export default App;
