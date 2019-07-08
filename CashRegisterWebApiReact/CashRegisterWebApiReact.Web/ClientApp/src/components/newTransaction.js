import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <button
          className="main__button"
          onClick={this.handleNewTransactionClick}
        >
          New Transaction
        </button>
        <Link to={`/login`}>
          <button className="main__button">Add Existing Item Ammount</button>
        </Link>
        <Link to={`/login`}>
          <button className="main__button">Add New Item</button>
        </Link>
        <Link to={`/login`}>
          <button className="main__button">Edit Old Item</button>
        </Link>
        <Link to={`/login`}>
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
