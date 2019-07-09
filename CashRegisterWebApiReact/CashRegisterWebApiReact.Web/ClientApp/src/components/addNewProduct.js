import React from "react";
import { Link } from "react-router-dom";
import ReactDom from 'react';
import axios from "axios";
import "../css/addNewProduct.css";

class AddNewProduct extends React.Component {
  handleAddButtonClick= () => {
    let name = ReactDom.findDOMNode(this.refs.name).value;
    let price = ReactDom.findDOMNode(this.refs.price).value;
    let ammount = ReactDom.findDOMNode(this.refs.ammount).value;
    axios.post('/api/products/add', { name, price, ammountAvailable: ammount}).then(() => {
      alert("Successfully added product");
      ReactDom.findDOMNode(this.refs.name).value = "";
      ReactDom.findDOMNode(this.refs.price).value = "";
      ReactDom.findDOMNode(this.refs.ammount).value = "";
    }).catch(() =>{
      alert("Add unsucessful");
    });
  };
  render() {
    return (
      <div className="main">
        <div className="main__form">
            <label className="main__form__label">Product Name: </label><br />
            <input ref="name" className="main__form__input" type="text" placeholder="Enter product name..." />
            <br />
            <label className="main__form__label">Product Price: </label><br />
            <input ref="price" className="main__form__input" type="number" placeholder="Enter product price..." />
            <br />
            <label className="main__form__label">Product Ammount: </label><br />
            <input ref="ammount" className="main__form__input" type="number" placeholder="Enter ammount of product..." />
            <button className="main__button" onClick={this.handleAddButtonClick}>Add Item</button>
        </div>
        <Link to={`/main`}>
          <button className="main__button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default AddNewProduct;
