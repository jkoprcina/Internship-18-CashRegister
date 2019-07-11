import React from "react";
import { Link } from "react-router-dom";
import AllProducts from "./allProducts";
import Receipt from "./receipt";
import "../../css/newTransaction.css";

class newTransaction extends React.Component {
  state = {
    receipt: []
  };

  handleAddToReceipt = productReceipt => {
    this.setState({ receipt: [...this.state.receipt, productReceipt] });
  };

  render() {
    return (
      <div>
        <div className="buying-div">
          <AllProducts addToReceipt={this.handleAddToReceipt} />
          <Receipt receipt={this.state.receipt} />
        </div>
        <Link to={`/main`}>
          <button className="button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default newTransaction;
