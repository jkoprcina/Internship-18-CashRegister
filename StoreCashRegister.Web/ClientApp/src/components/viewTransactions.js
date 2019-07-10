import React from "react";
import { Link } from "react-router-dom";
import "../css/viewTransactions.css";
import * as receipt from "../utils/receipt";

class ViewTransactions extends React.Component {
  state = {
    receipts: [],
    loading: true,
    selectedReceipt: null,
    isReceiptSelected: false
  }

  componentDidMount() {
    receipt.getAllReceipts().then(response => {
      let receipts = response.data;
      if(receipts != null){
        this.setState({ receipts, loading: false })
      }
    })
  };

  showReceiptDetails() {
    
  };
  render() {
    return (
      this.state.receiptIsSelected ? (
        <div className="receipt">
          {
            this.state.selectedReceipt.ProductReceipts.map(productReceipt => {
              (
                <div className="product-receipt">
                  <span>Product name: {productReceipt.name}</span>
                  <span>Product amount: {productReceipt.amount}</span>
                  <span>Price per piece: {productReceipt.priceAtTheTime}</span>
                  <span>Price together: {productReceipt.priceAtTheTime * productReceipt.priceAtTheTime}</span>
                </div>
              )
            })
          }
          <span className="info-label">Price without tax: </span>
          <span className="info">{ this.state.selectedReceipt.priceWithoutTax }</span>
          <span className="info-label">Excise tax:</span>
          <span className="info">{ this.state.selectedReceipt.exciseTax }</span>
          <span className="info-label">Direct tax: </span>
          <span className="info">{ this.state.selectedReceipt.directTax }</span>
          <span className="info-label">Full price: </span>
          <span className="info">{ this.state.selectedReceipt.fullPrice }</span>
        </div>
      ) : 
      (
        <div className="main">
          <div className="main__display-products">
            <h1>All Transactions so far</h1>
            {
              this.state.loading ? (<p>Loading...</p>) :
              (
                this.state.receipts.map(receipt => {
                  <div key={receipt.Id}>
                    {receipt.name} {receipt.fullPrice}
                    <button 
                      onClick={this.showReceiptDetails(receipt.id)}>
                      View details
                    </button>
                  </div>
                })
              )
            }
          </div>
          <Link to={`/main`}>
            <button className="main__button">Exit</button>
          </Link>
        </div>
      )
    );
  }
}

export default ViewTransactions;
