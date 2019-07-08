import React from "react";
import "../css/main.css";

class Main extends React.Component {
  handleInput = () => {};

  render() {
    return (
      <div className="main">
        <button className="main__button">New Transaction</button>
        <button className="main__button">Add Existing Item Ammount</button>
        <button className="main__button">Add New Item</button>
        <button className="main__button">Edit Old Item</button>
        <button className="main__button">View All Transactions</button>
        <button className="main__button">Log Out</button>
      </div>
    );
  }
}

export default Main;
