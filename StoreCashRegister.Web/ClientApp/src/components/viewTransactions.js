import React from "react";
import { Link } from "react-router-dom";
import "../css/viewTransactions.css";
import axios from "axios";
import ViewSingleTransaction from "./viewSingleTransaction";

class ViewTransactions extends React.Component {
  state = {
    receipts: [],
    loading: true,
    selectedReceipt: null,
    isReceiptSelected: false
  };

  getAllReceiptsAndShowThem() {
    axios.get("api/receipts/all").then(response => {
      this.setState({ receipts: response.date, loading: false });
    });
  }

  componentDidMount() {
    this.getAllReceiptsAndShowThem();
  }

  render() {
    return (
      <div className="main">
        <div className="main__display-products">
          <h1>All Transactions so far</h1>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            this.state.receipts.map(receipt => {
              <ViewSingleTransaction key={receipt.id} receipt={receipt} />;
            })
          )}
        </div>
        <Link to={`/main`}>
          <button className="main__button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default ViewTransactions;
