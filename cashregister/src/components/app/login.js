import React from "react";
import { connect } from "react-redux";
import "../../css/login.css";

class Login extends React.Component {
  handleInput = () => {};

  render() {
    return (
      <div className="form">
        <p>Cash-Register ID:</p>
        <input
          type="number"
          placeholder="Enter cash register id..."
          className="input"
        />
        <br />
        <p>Username: </p>
        <input
          type="text"
          placeholder="Enter worker username..."
          className="input"
        />
        <br />
        <p>Password: </p>
        <input
          type="text"
          placeholder="Enter worker password..."
          className="input"
        />
        <br />
        <button className="button">Login</button>
      </div>
    );
  }
}

export default Login;
