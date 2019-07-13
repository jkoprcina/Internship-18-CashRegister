import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { getAllProducts, addAmount, editProduct } from "./utils";
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
    this.setState({
      productIsSelected: false,
      loading: true,
      selectedProduct: null
    });
    getAllProducts().then(response => {
      this.setState({ products: response, loading: false });
    });
  };

  componentDidMount() {
    this.getAndShowAllProducts();
  }
  
  componentDidUpdate = () => {
      if (this.state.selectedProduct !== null) {
        if (this.state.selectedProduct.tax === TAX.LOW_TAX) {
          ReactDOM.findDOMNode(this.refs.lowTax).checked = true;
        } else {
          ReactDOM.findDOMNode(this.refs.highTax).checked = true;
        }
      }
    };
  compEditProduct = id => {
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
      validate.isBarcodeBad(barcode)
    ) {
      alert("Wrong info");
      return;
    }
    editProduct(id, barcode, price, tax).then(response => {
      if (response.status === 200) {
        alert("Success");
        this.getAndShowAllProducts();
      }
    });
  };

  compAddAmount(id) {
    let amount = prompt("Please enter the amount you wish to add");
    amount = validate.amountAddValidation(amount);
    if (amount !== 0) {
      addAmount(id, amount).then(() => {
        this.getAndShowAllProducts();
      });
    }
  }
  editProductFormOpen = product => {
    this.setState({ productIsSelected: true, selectedProduct: product });
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
            placeholder="Enter 13 digit barcode..."
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
          <input type="radio" name="tax" ref="highTax" />
          {TAX.HIGH_TAX}%
          <input type="radio" name="tax" ref="lowTax" />
          {TAX.LOW_TAX}%
          <br />
          <button
            className="main__button"
            onClick={() => this.compEditProduct(this.state.selectedProduct.id)}
          >
            Edit Item
          </button>
        </div>
        <button className="main__button" onClick={this.getAndShowAllProducts}>
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
                <button onClick={() => this.compAddAmount(product.id)}>
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
