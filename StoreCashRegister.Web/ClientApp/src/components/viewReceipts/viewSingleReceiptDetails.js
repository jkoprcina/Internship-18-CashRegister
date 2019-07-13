import React from "react";
import ViewProductReceipt from "./viewProductReceipt";
import "./viewReceipts.css";
import { CURRENCY } from "../../utils/constants";

export const ViewSingleReceiptDetails = props => {
  return (
    <div className="receipt">
      <h2>Store info</h2>
      <p>
        <span className="info-label">CashRegister number: </span>
        <span className="info">{props.cashRegister.name}</span>
      </p>
      <p>
        <span className="info-label">Cashier first name: </span>
        <span className="info">{props.cashier.firstName}</span>
      </p>
      <p>
        <span className="info-label">Cashier last name: </span>
        <span className="info">{props.cashier.lastName}</span>
      </p>
      <h2>Items</h2>
      {props.productReceipts.map(productReceipt => (
        <ViewProductReceipt productReceipt={productReceipt} />
      ))}
      <h2>Prices:</h2>
      <p>
        <span className="info-label">Price without tax: </span>
        <span className="info">
          {props.receipt.priceWithoutTax}
          {CURRENCY}
        </span>
      </p>
      <p>
        <span className="info-label">Excise tax:</span>
        <span className="info">
          {props.receipt.exciseTax}
          {CURRENCY}
        </span>
      </p>
      <p>
        <span className="info-label">Direct tax: </span>
        <span className="info">
          {props.receipt.directTax}
          {CURRENCY}
        </span>
      </p>
      <p>
        <span className="info-label">Full price: </span>
        <span className="info">
          {props.receipt.fullPrice}
          {CURRENCY}
        </span>
      </p>
      <button className="view-button" onClick={props.handleBack}>
        Go Back To List
      </button>
    </div>
  );
};

export default ViewSingleReceiptDetails;
