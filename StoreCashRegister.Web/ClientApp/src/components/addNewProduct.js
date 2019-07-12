import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import * as validation from "../utils/validations";
import * as TAX from "../utils/constants";
import "./addNewProduct.css";

class AddNewProduct extends React.Component {
  handleAddButtonClick = () => {
    let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
    let price = parseFloat(ReactDOM.findDOMNode(this.refs.price).value.trim());
    let amountAvailable = parseInt(
      ReactDOM.findDOMNode(this.refs.amount).value.trim(),
      10
    );
    let barcode = ReactDOM.findDOMNode(this.refs.barcode).value.trim();
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
      validation.isAnyItemInArrayEmpty([
        name,
        price,
        amountAvailable,
        tax,
        barcode
      ]) ||
      validation.isNegative(price) ||
      validation.isNegative(amountAvailable) ||
      validation.isNegative(tax) ||
      validation.barcodeValidation(barcode)
    ) {
      alert("You filled out something wrong");
      return;
    }
    axios
      .post("/api/products/add", {
        barcode,
        name,
        price,
        amountAvailable,
        tax
      })
      .catch(() => {
        alert("Add unsucessful");
        return;
      })
      .then(() => {
        alert("Successfully added product");
        this.emptyAllInputs();
      });
  };

  emptyAllInputs = () => {
    ReactDOM.findDOMNode(this.refs.name).value = "";
    ReactDOM.findDOMNode(this.refs.price).value = "";
    ReactDOM.findDOMNode(this.refs.amount).value = "";
    ReactDOM.findDOMNode(this.refs.barcode).value = "";
    ReactDOM.findDOMNode(this.refs.highTax).checked = false;
    ReactDOM.findDOMNode(this.refs.lowTax).checked = false;
  };
  render() {
    return (
      <div className="main">
        <div className="main__form">
          <label className="main__form__label">Product Name: </label>
          <br />
          <input
            ref="name"
            className="main__form__input"
            type="text"
            placeholder="Enter product name..."
          />
          <br />
          <label className="main__form__label">Product Barcode: </label>
          <br />
          <input
            ref="barcode"
            step="1"
            className="main__form__input"
            type="text"
            placeholder="Enter 13 digit barcode..."
          />
          <br />
          <label className="main__form__label">Product Price: </label>
          <br />
          <input
            ref="price"
            min="0"
            step="1"
            className="main__form__input"
            type="number"
            placeholder="Enter product price..."
          />
          <br />
          <label className="main__form__label">Product Amount: </label>
          <br />
          <input
            ref="amount"
            min="0"
            step="1"
            className="main__form__input"
            type="number"
            placeholder="Enter amount of product..."
          />
          <br />
          <label className="main__form__label">Product Tax: </label>
          <br />
          <input type="radio" name="colors" ref="highTax" />
          {TAX.HIGH_TAX}%
          <input type="radio" name="colors" ref="lowTax" />
          {TAX.LOW_TAX}%
          <br />
          <button className="main__button" onClick={this.handleAddButtonClick}>
            Add Item
          </button>
        </div>
        <Link to={`/main`}>
          <button className="main__button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default AddNewProduct;
