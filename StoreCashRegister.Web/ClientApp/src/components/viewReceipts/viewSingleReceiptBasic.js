import React from "react";
import "./viewReceipts.css";

export const ViewSingleReceiptBasic = props => {
  return (
    <div>
      <span>Number: {props.receipt.serialNumber}</span>{" "}
      <button
        className="view-button"
        onClick={() => props.handleSelect(props.receipt)}
      >
        View details
      </button>
    </div>
  );
};

export default ViewSingleReceiptBasic;
