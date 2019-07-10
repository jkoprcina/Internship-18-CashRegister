import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import * as cashRegister from "../utils/cashRegister";
import * as cashier from "../utils/cashier";
import "../css/main.css";

//Login doesn't work, probably backend problem
class Main extends React.Component {
  state = {
    loggedIn: true
  }
  handleLogin = () =>  {
    var cashRegisterId = ReactDOM.findDOMNode(this.refs.cashRegister).value;
    var username = ReactDOM.findDOMNode(this.refs.username).value;
    var password = ReactDOM.findDOMNode(this.refs.password).value;
    if(cashRegister === "" || username === "" || password === ""){
      alert("You need to fill all the inputs");
      return;
    }
    cashRegister.getCashRegisterById(cashRegisterId).then(
      (
        cashier.getCashierByUsername({ username: username, password: password }).then(
          (response => {
            alert("Welcome!");
            localStorage.setItem(response.username, response.lastName)
            this.setState({ loggedIn: true })
          }),
          ( alert("The username or password are incorrect")
          )
        )
      ), 
      ( 
        alert("THe CashRegister does not exist")
      )
    )};

  handleLogOut = () => {
    this.setState({ loggedIn: false});
    localStorage.clear();
  }

  render() {
    return (
      this.state.loggedIn ? 
      (
        <div className="main">
          <Link to={`/newTransaction`}>
          <button className="main__button">New Transaction</button>
          </Link>
          <Link to={`/addNewProduct`}>
            <button className="main__button">Add New Item</button>
          </Link>
          <Link to={`/editProducts`}>
            <button className="main__button">Edit items/Add amount</button>
          </Link>
          <Link to={`/viewTransactions`}>
            <button className="main__button">View All Transactions</button>
          </Link>
            <button className="main__button" onClick={this.handleLogOut}>Log Out</button>
        </div>
      ) :
      (
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
        <button className="main__button" onClick={this.handleLogin}>Login</button>
      </div>
      )
    )}
}

export default Main;
