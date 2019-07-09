import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class Main extends React.Component {
  handleInput = () => {};

  render() {
    return (
      <div className="main">
        <Link to={`/newTransaction`}>
        <button className="main__button">New Transaction</button>
        </Link>
        <Link to={`/addNewProduct`}>
          <button className="main__button">Add New Item</button>
        </Link>
        <Link to={`/editProducts`}>
          <button className="main__button">Edit items/Add ammount</button>
        </Link>
        <Link to={`/viewTransactions`}>
          <button className="main__button">View All Transactions</button>
        </Link>
        <Link to={`/login`}>
          <button className="main__button">Log Out</button>
        </Link>
      </div>
    );
  }
}

export default Main;
