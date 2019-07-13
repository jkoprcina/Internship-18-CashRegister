import React from "react";
import { Link } from "react-router-dom";
import ViewSingleReceiptBasic from "./viewSingleReceiptBasic";
import ViewSingleReceiptDetails from "./viewSingleReceiptDetails";
import {
  getTenReceipts,
  getCashRegisterById,
  getCashierById,
  getProductReceiptsById
} from "./viewReceiptsUtils";
import "./viewReceipts.css";
import InfiniteScroll from "react-infinite-scroller";

class ViewReceipts extends React.Component {
  state = {
    receipts: [],
    loading: true,
    selectedReceipt: null,
    isReceiptSelected: false,
    cashier: null,
    cashRegister: null,
    productReceipts: [],
    whereToStartFrom: 0,
    isLast: false
  };

  componentDidMount = () => {
    this.getReceipts();

    setTimeout(() => {
      this.getReceipts();
    }, 500);
  };

  handleBack = () => {
    this.setState({
      isReceiptSelected: false,
      selectedReceipt: null,
      cashier: null,
      cashRegister: null,
      productReceipts: []
    });
  };

  handleSelect = receipt => {
    getCashRegisterById(receipt.cashRegisterId).then(cashRegister => {
      this.setState({ cashRegister });
      getCashierById(receipt.cashierId).then(cashier => {
        this.setState({ cashier });
        getProductReceiptsById(receipt.id).then(productReceipts => {
          this.setState({
            isReceiptSelected: true,
            selectedReceipt: receipt,
            productReceipts
          });
        });
      });
    });
  };

  getReceipts = () => {
    getTenReceipts(this.state.whereToStartFrom).then(response => {
      if (response.length < 10) {
        this.setState({ isLast: true });
      } else {
        let allReceiptsSoFar = this.state.receipts;
        response.map(item => {
          allReceiptsSoFar.push(item);
        });
        this.setState({
          receipts: allReceiptsSoFar,
          whereToStartFrom: this.state.whereToStartFrom + 10,
          loading: false
        });
      }
    });
  };

  render() {
    const {
      selectedReceipt,
      cashier,
      cashRegister,
      productReceipts
    } = this.state;
    return (
      <div className="main">
        <div className="main__display-products">
          <h1>All Receipts so far</h1>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : selectedReceipt != null &&
            cashRegister != null &&
            cashier != null &&
            productReceipts != null ? (
            <ViewSingleReceiptDetails
              cashRegister={this.state.cashRegister}
              cashier={this.state.cashier}
              productReceipts={this.state.productReceipts}
              receipt={this.state.selectedReceipt}
              handleBack={this.handleBack}
            />
          ) : (
            <div className="infinity-scroll">
              <InfiniteScroll
                dataLength={this.state.receipts.length}
                next={this.getReceipts}
                hasMore={!this.state.isLast}
                loader={<p>Loading...</p>}
                height={400}
                endMessage={
                  <p>
                    <b>No receipts left</b>
                  </p>
                }
              >
                {this.state.receipts.map((receipt, index) => (
                  <ViewSingleReceiptBasic
                    key={index}
                    receipt={receipt}
                    handleSelect={() => this.handleSelect(receipt)}
                  />
                ))}
              </InfiniteScroll>
            </div>
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
