import React from "react";
import axios from "axios";
import SingleProductsItem from "./singleProductsItem";
import "../../css/newTransaction.css";

class AllProducts extends React.Component {
  state = {
    products: [],
    loading: true
  };

  getAndShowAllProducts = () => {
    axios
      .get("api/products/all")
      .then(response => {
        this.setState({ products: response.data, loading: false });
      })
      .catch(() => {
        alert("Failed");
      });
  };

  componentDidMount() {
    this.getAndShowAllProducts();
  }

  handleRemoveAmount = product => {
    let amount = prompt("Please enter the amount you wish to add");
    if (Number.isInteger(amount) || amount <= 0) {
      alert("The input must be a whole number");
      return;
    }
    if (amount > product.amountAvailable) {
      alert("There's not enough in stock");
      return;
    }
    axios
      .post("api/products/remove-amount", {
        id: product.id,
        amountToRemove: amount
      })
      .then(() => {
        this.getAndShowAllProducts();
        //Make new kinda ProductReceipt
        let productReceipt = {
          productId: product.id,
          name: product.name,
          amount: amount,
          priceAtTheTime: product.basicPrice + product.basicPrice * product.tax
        };
        this.props.addToReceipt(productReceipt);
      });
  };
  render() {
    return (
      <div className="buying-div__all-items">
        <h1>All Available Products</h1>
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          this.state.products.map(product => (
            <SingleProductsItem
              key={product.id}
              product={product}
              addToReceipt={this.handleRemoveAmount}
            />
          ))
        )}
      </div>
    );
  }
}

export default AllProducts;
