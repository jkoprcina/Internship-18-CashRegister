import React from "react";
import { Link } from "react-router-dom";
import ViewSingleReceiptBasic from "./viewSingleReceiptBasic";
import ViewSingleReceiptDetails from "./viewSingleReceiptDetails";
import { getAllReceipts } from "./viewReceiptsUtils";

class ViewReceipts extends React.Component {
  state = {
    receipts: [],
    loading: true,
    selectedReceipt: null,
    isReceiptSelected: false
  };

  componentDidMount = () => {
    getAllReceipts().then(response => {
      this.setState({ receipts: response });
      if (this.state.receipts !== undefined) {
        this.setState({ loading: false });
      }
    });
  };

  handleBack() {
    this.setState({ isReceiptSelected: false, selectedReceipt: null });
  }

  handleSelect = receipt => {
    this.setState({ isReceiptSelected: true, selectedReceipt: receipt });
  };

  render() {
    return (
      <div className="main">
        <div className="main__display-products">
          <h1>All Receipts so far</h1>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : this.state.isReceiptSelected ? (
            <ViewSingleReceiptDetails
              receipt={this.state.selectedReceipt}
              handleBack={this.handleBack}
            />
          ) : (
            this.state.receipts.map(receipt => {
              <ViewSingleReceiptBasic
                key={receipt.id}
                receipt={receipt}
                handleSelect={() => this.handleSelect(receipt)}
              />;
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

export default ViewReceipts;
