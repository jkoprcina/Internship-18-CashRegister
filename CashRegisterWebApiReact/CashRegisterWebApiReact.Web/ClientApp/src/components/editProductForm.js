import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/addNewProduct.css";

class EditProductFrom extends React.Component {
  componentDidMount() {
    ReactDom.findDOMNode(this.refs.name).value = props.name;
    ReactDom.findDOMNode(this.refs.price).value = props.price;
    ReactDom.findDOMNode(this.refs.ammount).value = props.ammount;
  };
  handleEditButtonClick= () => {
    //Need to add checking if price is a double and ammount an int
    let name = ReactDom.findDOMNode(this.refs.name).value;
    let price = ReactDom.findDOMNode(this.refs.price).value;
    let ammount = ReactDom.findDOMNode(this.refs.ammount).value;
    if(name === "" || price < 0 || ammount < 0){
      alert("Wrong info");
      return;
    }
    axios.post('/api/products/edit', { name, price, ammountAvailable: ammount}).then(() => {
      alert("Successfully edited product");
    }).catch(() =>{
      alert("Edit unsucessful");
    });
  };
  render() {
    return (
      <div className="main">
        <div className="main__form">
            <label className="main__form__label">Product Name: </label><br />
            <input className="main__form__input" type="text" placeholder="Enter product name..." />
            <br />
            <label className="main__form__label">Product Price: </label><br />
            <input className="main__form__input" type="number" placeholder="Enter product price..." />
            <br />
            <label className="main__form__label">Product Ammount: </label><br />
            <input className="main__form__input" type="number" placeholder="Enter ammount of product..." />
            <button className="main__button" onClick={this.handleEditButtonClick}>Edit Item</button>
        </div>
        <Link to={`/main`}>
          <button className="main__button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default EditProductFrom;