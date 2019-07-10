import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/newTransaction.css";

class newTransaction extends React.Component {
  state = {
    products: [],
    loading: true,
    selectedProduct: null
  }
  componentDidMount() {
    axios.get('/api/products/all').then(response => {
      let allProducts = response.data;
      this.setState({products: allProducts, loading: false})
    })
  };

  render() {
    return (
        <div className="buying-div">
          <div className="buying-div__all-items">
          <h1>All Available Products</h1>
          {
            this.state.loading ? (<p>Loading...</p>) :
            (
              this.state.products.map(product => {
                <div 
                  key={product.Id} 
                  onClick={this.handleItemClicked(product.Id)}>
                  {product.Name} {product.amount}
                  <button onClick={() => this.addamount(product.id)}>Add amount</button>
                  <button onClick={() => this.editProduct(product.id)}>Edit item</button>
                </div>
              })
            )
          }
          <Link to={`/main`}>
            <button className="button">Exit</button>
          </Link>
          </div>
          <div className="buying-div__basket">

          </div>
        </div>
    );
  }
}

export default newTransaction;
