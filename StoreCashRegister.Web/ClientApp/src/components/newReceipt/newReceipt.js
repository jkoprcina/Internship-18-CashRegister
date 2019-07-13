import React from "react";
import { Link } from "react-router-dom";
import AllProducts from "./allProducts";
import Receipt from "./receipt";
import "./newReceipt.css";
import { addAmount } from "../utils";

class newReceipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReceipts: []
    };
  }
  handleAddToReceipt = productReceipt => {
    let allItemsInReceipt = this.state.productReceipts;

    allItemsInReceipt.map(item => {
      if (item.name === productReceipt.name) {
        item.amount += productReceipt.amount;
        productReceipt.amount = 0;
      }
    });

    if (productReceipt.amount !== 0) {
      allItemsInReceipt.push(productReceipt);
    }
    this.setState({ productReceipt: [...allItemsInReceipt] });
  };

  itemsBought = () => {
    this.setState({ productReceipts: [] });
    alert("Successfull transaction!");
  };

  returnEverything = () => {
    this.state.productReceipts.map(productReceipt => {
      addAmount(productReceipt.productId, productReceipt.amount);
    });
  };

  render() {
    return (
      <div>
        <div className="buying-div">
          <AllProducts addToReceipt={this.handleAddToReceipt} />
          <Receipt
            productReceipts={this.state.productReceipts}
            itemsBought={this.itemsBought}
          />
        </div>
        <Link to={`/main`}>
          <button onClick={this.returnEverything} className="button">
            Exit
          </button>
        </Link>
      </div>
    );
  }
}

export default newReceipt;
