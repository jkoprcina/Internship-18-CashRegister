import React from "react";
import { Link } from "react-router-dom";
import AllProducts from "./allProducts";
import Receipt from "./receipt";
import "./newTransaction.css";

class newTransaction extends React.Component {
  state = {
    productReceipts: []
  };

  handleAddToReceipt = productReceipt => {
    let allItemsInReceipt = this.state.productReceipts;
    allItemsInReceipt.map(item => {
      if (item.name === productReceipt.name) {
        item.amount += productReceipt.amount;
        productReceipt.amount = 0;
      }
    });
    if (productReceipt.amount !== 0) {
      this.setState({
        productReceipts: [...this.state.productReceipts, productReceipt]
      });
    } else {
      this.setState({ productReceipt: [...allItemsInReceipt] });
    }
  };

  render() {
    return (
      <div>
        <div className="buying-div">
          <AllProducts addToReceipt={this.handleAddToReceipt} />
          <Receipt productReceipts={this.state.productReceipts} />
        </div>
        <Link to={`/main`}>
          <button className="button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default newTransaction;
