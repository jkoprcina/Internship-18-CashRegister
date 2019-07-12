import React from "react";
import { Link } from "react-router-dom";
import ViewSingleTransaction from "./viewSingleTransaction";
import { getAllReceipts } from "./utils";

class ViewTransactions extends React.Component {
  state = {
    receipts: [],
    loading: true,
    selectedReceipt: null,
    isReceiptSelected: false
  };

  getAllReceiptsAndShowThem() {
    getAllReceipts().then(response => {
      this.setState({ receipts: response });
      if (this.state.receipts !== undefined) {
        this.setState({ loading: false });
      }
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
