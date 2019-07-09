import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/viewTransactions.css";

class ViewTransactions extends React.Component {
  state = {
    receipts: [],
    loading: true,
    selectedReceipt: null
  }
  componentDidMount() {
    axios.get('/api/receipts/all').then(response => {
      let receipts = response.data;
      this.setState({receipts, loading: false})
    })
  };

  handleItemClicked() {
    
  };
  render() {
    return (
      <div className="main">
        <div className="main__display-products">
          <h1>All Transactions so far</h1>
          {
            this.state.loading ? (<p>Loading...</p>) :
            (
              this.state.receipts.map(receipt => {
                <div 
                  key={receipt.Id} 
                  onClick={this.handleItemClicked(receipt.id)}>
                  {receipt.name} {receipt.fullPrice}
                  <button>View details</button>
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

export default ViewTransactions;
