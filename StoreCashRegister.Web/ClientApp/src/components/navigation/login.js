import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./navigation.css";

class Login extends React.Component {
  login = () => {
    let cashRegisterId = ReactDOM.findDOMNode(this.refs.cashRegister).value;
    let cashierUsername = ReactDOM.findDOMNode(this.refs.username).value;
    let cashierPassword = ReactDOM.findDOMNode(this.refs.password).value;
    if (
      cashRegisterId === "" ||
      cashierUsername === "" ||
      cashierPassword === ""
    ) {
      alert("You need to fill all the inputs");
      return;
    }
    axios
      .get("api/cash-registers/get-by-id", { params: { id: cashRegisterId } })
      .then(cashRegisterResponse => {
        axios
          .get("api/cashiers/get-by-username", {
            params: {
              username: cashierUsername
            }
          })
          .then(cashierResponse => {
            localStorage.setItem(
              "cashRegisterId",
              cashRegisterResponse.data.id
            );
            localStorage.setItem("cashierId", cashierResponse.data.id);
            localStorage.setItem("firstName", cashierResponse.data.firstName);
            localStorage.setItem("lastName", cashierResponse.data.lastName);
            alert("Welcome!");
            this.props.handleLogin();
          })
          .catch(() => {
            alert("The username or password are incorrect");
          });
      })
      .catch(() => {
        alert("The CashRegister does not exist");
      });
  };

  render() {
    return (
      <div className="main">
        <p>Cash-Register ID:</p>
        <input
          ref="cashRegister"
          type="number"
          placeholder="Enter cash register id..."
          className="input"
        />
        <br />
        <p>Username: </p>
        <input
          ref="username"
          type="text"
          placeholder="Enter worker username..."
          className="input"
        />
        <br />
        <p>Password: </p>
        <input
          ref="password"
          type="password"
          placeholder="Enter worker password..."
          className="input"
        />
        <br />
        <button className="main__button" onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
