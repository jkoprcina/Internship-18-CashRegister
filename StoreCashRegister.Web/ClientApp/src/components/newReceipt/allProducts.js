import React from "react";
import axios from "axios";
import SingleProductsItem from "./singleProductsItem";
import { amountRemoveValidation } from "../../utils/validations";
import "./newReceipt.css";
import { removeAmount } from "./newReceiptUtils";

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

  askUserAmount = product => {
    let amount = prompt("Please enter the amount you wish to add");
    return amountRemoveValidation(amount, product);
  };

  handleRemoveAmount = product => {
    let amount = this.askUserAmount(product);
    if (amount !== 0) {
      removeAmount(product, amount).then(() => {
        this.getAndShowAllProducts();
        let productReceipt = {
          productId: product.id,
          name: product.name,
          amount: parseInt(amount, 10),
          price: parseFloat(product.price),
          tax: parseInt(product.tax, 10)
        };
        this.props.addToReceipt(productReceipt);
      });
    }
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
