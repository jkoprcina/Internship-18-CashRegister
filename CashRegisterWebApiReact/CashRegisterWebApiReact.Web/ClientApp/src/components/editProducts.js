import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/editProducts.css";

class EditProducts extends React.Component {
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
  handleEditProductClicked(id) {
    
  }
  handleAddAmmountClicked(id) {
    var ammount = prompt("Please enter the ammount you wish to add");
    if(Number.isInteger(ammount) || ammount <= 0){
      alert("The input must be a whole number");
      return;
    }
    else{
      axios.get('api/products/getById', { id, ammount}).then(response => {
          axios.post('/api/products/addAmmount', response.data ).then(response => {
            axios.get('/api/products/all').then(response => {
              let allProducts = response.data;
              this.setState({products: allProducts, loading: false})
            });
          }).catch(() => {
            alert("Add unsucessful");
          });
        });
    }
  }
  render() {
    return (
      <div className="main">
        <div className="main__display-products">
          <h1>All Available Products</h1>
          {
            this.state.loading ? (<p>Loading...</p>) :
            (
              this.state.products.map(product => {
                <div 
                  key={product.Id} 
                  onClick={this.handleItemClicked(product.Id)}>
                  {product.Name} {product.Ammount}
                  <button onClick={() => this.addAmmount(product.id)}>Add ammount</button>
                  <button onClick={() => this.editProduct(product.id)}>Edit item</button>
                </div>
              })
            )
          }
        </div>
        <Link to={`/main`}>
          <button className="main__button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default EditProducts;
