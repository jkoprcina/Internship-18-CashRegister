import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import "../css/addNewProduct.css";
//Works

class AddNewProduct extends React.Component {
  handleAddButtonClick = () => {
    let name = ReactDOM.findDOMNode(this.refs.name).value;
    let price = ReactDOM.findDOMNode(this.refs.price).value;
    let amount = ReactDOM.findDOMNode(this.refs.amount).value;
    let tax = ReactDOM.findDOMNode(this.refs.tax).value;

    axios
      .post("/api/products/add", { name, price, amountAvailable: amount, tax })
      .then(() => {
        alert("Successfully added product");
        ReactDOM.findDOMNode(this.refs.name).value = "";
        ReactDOM.findDOMNode(this.refs.price).value = "";
        ReactDOM.findDOMNode(this.refs.amount).value = "";
        ReactDOM.findDOMNode(this.refs.tax).value = "";
      })
      .catch(() => {
        alert("Add unsucessful");
      });
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
          <label className="main__form__label">Product Price: </label>
          <br />
          <input
            ref="price"
            className="main__form__input"
            type="number"
            placeholder="Enter product price..."
          />
          <br />
          <label className="main__form__label">Product Amount: </label>
          <br />
          <input
            ref="amount"
            className="main__form__input"
            type="number"
            placeholder="Enter amount of product..."
          />
          <br />
          <label className="main__form__label">Tax Amount: </label>
          <br />
          <input
            ref="tax"
            className="main__form__input"
            type="number"
            placeholder="Enter tax amount..."
          />
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
