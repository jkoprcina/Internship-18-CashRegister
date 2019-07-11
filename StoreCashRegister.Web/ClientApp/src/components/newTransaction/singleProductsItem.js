import React from "react";
import "../../css/newTransaction.css";

const SingleProductsItem = props => {
  return (
    <div
      className="buying-div__all-items__single-item"
      key={props.product.id}
      onClick={() => props.addToBasket(props.product)}
    >
      <p>
        Name: {props.product.name} Amount:{props.product.amountAvailable} Price:{" "}
        {props.product.price}
      </p>
    </div>
  );
};

export default SingleProductsItem;
