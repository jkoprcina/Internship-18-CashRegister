import React from "react";
import "../css/viewTransactions.css";
import ViewSingleTransactionsDetails from "./viewSingleTransactionDetails";

class ViewSingleTransaction extends React.Component {
  state = {
    isSelected: false
  };

  handleSelect() {
    this.setState({ isSelected: true });
  }
  handleBack() {
    this.setState({ isSelected: false });
  }

  render() {
    return this.state.isSelected ? (
      <div className="receipt">
        {props.ProductReceipts.map(productReceipt => {
          <SingleReceiptItem productReceipt={productReceipt} />;
        })}
        <span className="info-label">Price without tax: </span>
        <span className="info">{props.priceWithoutTax}</span>
        <span className="info-label">Excise tax:</span>
        <span className="info">{props.exciseTax}</span>
        <span className="info-label">Direct tax: </span>
        <span className="info">{props.directTax}</span>
        <span className="info-label">Full price: </span>
        <span className="info">{props.fullPrice}</span>
        <button onClick={this.handleBack} />
      </div>
    ) : (
      <div>
        {props.name} {props.fullPrice}
        <button onClick={() => this.handleSelect()}>View details</button>
      </div>
    );
  }
}

export default ViewSingleTransaction;
