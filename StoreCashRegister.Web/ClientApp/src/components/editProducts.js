import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import axios from "axios";
import "../css/editProducts.css";

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
        console.log(response.data);
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
    //Need to add checking if price is a double and amount an int
    let price = ReactDOM.findDOMNode(this.refs.price).value;
    let tax = ReactDOM.findDOMNode(this.refs.tax).value;
    if (price < 0 || tax < 0) {
      alert("Wrong info");
      return;
    }
    console.log(id);
    axios
      .post("api/products/edit", { id: id, price: price, tax: tax })
      .then(() => {
        alert("Edited successfully!");
        this.getAndShowAllProducts();
      });
  };

  addAmount(id) {
    var amount = prompt("Please enter the amount you wish to add");
    if (Number.isInteger(amount) || amount <= 0) {
      alert("The input must be a whole number");
      return;
    } else {
      axios
        .post("api/products/add-amount", { id: id, amountToAdd: amount })
        .then(() => {
          this.getAndShowAllProducts();
        });
    }
  }
  editProductFormOpen(product) {
    this.setState({ productIsSelected: true, selectedProduct: product });
  }

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
          <label className="main__form__label">Product Price: </label>
          <br />
          <input
            ref="price"
            defaultValue={this.state.selectedProduct.price}
            className="main__form__input"
            type="number"
            placeholder="Enter product price..."
          />
          <br />
          <label className="main__form__label">Product tax: </label>
          <br />
          <input
            ref="tax"
            defaultValue={this.state.selectedProduct.tax}
            className="main__form__input"
            type="number"
            placeholder="Enter the tax..."
          />
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
