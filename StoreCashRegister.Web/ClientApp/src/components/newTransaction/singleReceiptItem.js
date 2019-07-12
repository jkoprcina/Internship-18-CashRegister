import React from "react";
import "./newTransaction.css";

const SingleReceiptItem = props => {
  return (
    <div className="buying-div__receipt__single-item">
      <p>
        {props.productReceipt.name} Amount:
        {props.productReceipt.amount} Price Per Piece:{" "}
        {props.productReceipt.price}
      </p>
    </div>
  );
};

export default SingleReceiptItem;
