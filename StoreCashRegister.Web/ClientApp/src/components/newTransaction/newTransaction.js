import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AllProducts from "./allProducts";
import Receipt from "./receipt";
import "../../css/newTransaction.css";

class newTransaction extends React.Component {
  state = {
    basket: [],
    selectedProduct: null
  };

  handleAddToBasket = product => {
    this.setState({ basket: [...this.state.basket, product] });
    console.log(this.state.basket);
  };

  render() {
    return (
      <div>
        <div className="buying-div">
          <AllProducts addToBasket={this.handleAddToBasket} />
          <Receipt basket={this.state.basket} />
        </div>
        <Link to={`/main`}>
          <button className="button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default newTransaction;
