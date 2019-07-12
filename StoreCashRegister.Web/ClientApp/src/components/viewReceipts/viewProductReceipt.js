import React from "react";

export const ViewProductReceipt = props => {
  return (
    <div>
      <p>
        Name:{this.props.productReceipt.name} Amount bought:
        {this.props.productReceipt.amount}
        Cost:{this.props.productReceipt.price}
      </p>
    </div>
  );
};

export default ViewProductReceipt;
