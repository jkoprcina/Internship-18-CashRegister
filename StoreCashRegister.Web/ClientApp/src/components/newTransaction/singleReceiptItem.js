import React from "react";
import "../../css/newTransaction.css";

const SingleReceiptItem = props => {
  console.log(this.state.productReceipt);
  return (
    <div
      className="buying-div__receipt__single-item"
      key={props.productReceipt.id}
    >
      <p>
        Name: {props.productReceipt.name} Amount:
        {props.productReceipt.amount} Price:{" "}
        {props.productReceipt.priceAtTheTime}
      </p>
    </div>
  );
};

export default SingleReceiptItem;
