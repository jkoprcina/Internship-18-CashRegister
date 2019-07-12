import React from "react";
import SingleReceiptItem from "./newTransaction/singleReceiptItem";

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
        {this.props.receipt.ProductReceipts.map(productReceipt => {
          <SingleReceiptItem productReceipt={productReceipt} />;
        })}
        <span className="info-label">Price without tax: </span>
        <span className="info">{this.props.receipt.priceWithoutTax}</span>
        <span className="info-label">Excise tax:</span>
        <span className="info">{this.props.receipt.exciseTax}</span>
        <span className="info-label">Direct tax: </span>
        <span className="info">{this.props.receipt.directTax}</span>
        <span className="info-label">Full price: </span>
        <span className="info">{this.props.receipt.fullPrice}</span>
        <button onClick={this.handleBack} />
      </div>
    ) : (
      <div>
        {this.props.receipt.name} {this.props.receipt.fullPrice}
        <button onClick={() => this.handleSelect()}>View details</button>
      </div>
    );
  }
}

export default ViewSingleTransaction;
