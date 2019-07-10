import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/newTransaction.css";

class newTransaction extends React.Component {
  state = {
    products: [],
    basket: [],
    loading: true,
    selectedProduct: null
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

  addToBasket = (id, amountAvailable) => {
    let amount = prompt("Please enter the amount you wish to add");
    console.log(amountAvailable);
    if (Number.isInteger(amount) || amount <= 0) {
      alert("The input must be a whole number");
      return;
    }
    if (amount > amountAvailable) {
      alert("There's not enough in stock");
      return;
    }
  };
  render() {
    return (
      <div>
        <div className="buying-div">
          <div className="buying-div__all-items">
            <h1>All Available Products</h1>
            {this.state.loading ? (
              <p>Loading...</p>
            ) : (
              this.state.products.map(product => (
                <div
                  className="buying-div__all-items__single-item"
                  key={product.id}
                  onClick={() =>
                    this.addToBasket(product.id, product.amountAvailable)
                  }
                >
                  <p>
                    Name: {product.name} Amount:{product.amountAvailable} Price:{" "}
                    {product.price}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="buying-div__basket" />
        </div>
        <Link to={`/main`}>
          <button className="button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default newTransaction;
