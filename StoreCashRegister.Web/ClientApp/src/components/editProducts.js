import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import * as validate from "../utils/validations";
import * as TAX from "../utils/constants";

class EditProducts extends React.Component {
  state = {
    products: [],
    loading: true,
    selectedProduct: null,
    productIsSelected: false
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

  editProduct = id => {
    let price = ReactDOM.findDOMNode(this.refs.price).value;
    let barcode = ReactDOM.findDOMNode(this.refs.barcode).value;
    if (
      ReactDOM.findDOMNode(this.refs.highTax).checked === false &&
      ReactDOM.findDOMNode(this.refs.lowTax).checked === false
    ) {
      alert("You need to check one tax option");
      return;
    }
    let tax = 0;
    if (ReactDOM.findDOMNode(this.refs.highTax).checked) {
      tax = TAX.HIGH_TAX;
    } else {
      tax = TAX.LOW_TAX;
    }
    if (
      validate.isNegative(price) ||
      validate.isNegative(tax) ||
      validate.barcodeValidation(barcode)
    ) {
      alert("Wrong info");
      return;
    }
    axios.post("api/products/edit", { id, barcode, price, tax }).then(() => {
      alert("Edited successfully!");
      this.getAndShowAllProducts();
    });
  };

  addAmount(id) {
    let amount = prompt("Please enter the amount you wish to add");
    amount = validate.amountAddValidation(amount);
    if (amount !== 0) {
      axios
        .post("api/products/add-amount", { id, amountToAdd: amount })
        .then(() => {
          this.getAndShowAllProducts();
        });
    }
  }
  editProductFormOpen = product => {
    this.setState({ productIsSelected: true, selectedProduct: product });
  };

  goBackToAllProducts = () => {
    this.setState({
      productIsSelected: false,
      loading: true,
      selectedProduct: null
    });
    this.getAndShowAllProducts();
  };

  render() {
    return this.state.productIsSelected ? (
      <div className="main">
        <div className="main__form">
          <h1 className="main__form__label">
            {this.state.selectedProduct.name}
          </h1>
          <br />
          <br />
          <label className="main__form__label">Product Barcode: </label>
          <br />
          <input
            ref="barcode"
            step="1"
            defaultValue={this.state.selectedProduct.barcode}
            className="main__form__input"
            type="number"
            placeholder="Enter product price..."
          />
          <br />
          <br />
          <label className="main__form__label">Product Price: </label>
          <br />
          <input
            ref="price"
            min="0"
            step="1"
            defaultValue={this.state.selectedProduct.price}
            className="main__form__input"
            type="number"
            placeholder="Enter product price..."
          />
          <br />
          <label className="main__form__label">Product Tax: </label>
          <br />
          <input type="radio" name="colors" ref="highTax" />
          {TAX.HIGH_TAX}%
          <input type="radio" name="colors" ref="lowTax" />
          {TAX.LOW_TAX}%
          <br />
          <button
            className="main__button"
            onClick={() => this.editProduct(this.state.selectedProduct.id)}
          >
            Edit Item
          </button>
        </div>
        <button className="main__button" onClick={this.goBackToAllProducts}>
          Back
        </button>
      </div>
    ) : (
      <div className="main">
        <div className="main__display-products">
          <h1>All Available Products</h1>
          {this.state.loading || this.state.products == null ? (
            <p>Loading...</p>
          ) : (
            this.state.products.map(product => (
              <div key={product.id}>
                <p>
                  NAME: {product.name} AVAILABLE AMOUNT:
                  {product.amountAvailable} PRICE: {product.price}
                </p>
                <button onClick={() => this.addAmount(product.id)}>
                  Add amount
                </button>
                <button onClick={() => this.editProductFormOpen(product)}>
                  Edit item
                </button>
              </div>
            ))
          )}
        </div>
        <Link to={`/main`}>
          <button className="main__button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default EditProducts;
