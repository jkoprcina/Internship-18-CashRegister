import React from "react";
import { CURRENCY } from "../../utils/constants";

export const ViewProductReceipt = props => {
  return (
    <div>
      <p>
        {props.productReceipt.name} Amount bought:
        {props.productReceipt.amount}
        Cost:{props.productReceipt.priceAtTheTime}
        {CURRENCY}
      </p>
    </div>
  );
};

export default ViewProductReceipt;
