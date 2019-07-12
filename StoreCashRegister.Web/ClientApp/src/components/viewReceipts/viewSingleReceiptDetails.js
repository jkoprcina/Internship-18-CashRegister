import React from "react";
import ViewProductReceipt from "./viewProductReceipt";

export const ViewSingleReceiptDetails = props => {
  return (
    <div className="receipt">
      <span className="info-label">CashRegister number: </span>
      <span className="info">{this.props.receipt.cashRegister.id}</span>
      <span className="info-label">Cashier first name: </span>
      <span className="info">{this.props.receipt.cashier.firstName}</span>
      <span className="info-label">Cashier last name: </span>
      <span className="info">{this.props.receipt.cashier.lastName}</span>
      {this.props.receipt.productReceipts.map(productReceipt => {
        <ViewProductReceipt productReceipt={productReceipt} />;
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
  );
};

export default ViewSingleReceiptDetails;
