import React from "react";
import SingleReceiptItem from "./singleReceiptItem";
import * as math from "../../utils/math";
import { addReceipt } from "./utils";
import "./newTransaction.css";

class Receipt extends React.Component {
  state = {
    cashRegister: "",
    cashier: { firstName: "", lastName: "", id: "" },
    fullPriceNoTax: "",
    fullPriceWithTax: "",
    fullLowerTaxPrice: "",
    fullHigherTaxPrice: ""
  };

  componentDidMount() {
    this.setState({
      cashRegister: localStorage.getItem("cashRegisterId"),
      cashier: {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        username: localStorage.getItem("id")
      }
    });
  }
  componentWillReceiveProps() {
    let fullPriceNoTax = math.fullPriceNoTaxCalculator(
      this.props.productReceipts
    );
    let fullPriceWithTax = math.fullPriceWithTaxCalculator(
      this.props.productReceipts
    );
    let fullLowerTaxPrice = math.fullLowerTaxPriceCalculator(
      this.props.productReceipts
    );
    let fullHigherTaxPrice = math.fullHigherTaxPriceCalculator(
      this.props.productReceipts
    );
    this.setState({
      fullPriceNoTax,
      fullPriceWithTax,
      fullLowerTaxPrice,
      fullHigherTaxPrice
    });
  }
  handleBuy = () => {
    addReceipt(
      this.state.fullPriceNoTax,
      this.state.fullPriceWithTax,
      this.state.fullLowerTaxPrice,
      this.state.fullHigherTaxPrice,
      this.state.cashRegister,
      this.state.cashier.username
    );
  };

  render() {
    return (
      <div className="buying-div__receipt">
        <h1>Receipt</h1>
        <p>Cash Register Number:{this.state.cashRegister}</p>
        <p>Cashier Name:{this.state.cashier.firstName}</p>
        <p>
          Cashier Last Name:
          {this.state.cashier.lastName}
        </p>
        {this.props.productReceipts === [] ? (
          <p />
        ) : (
          this.props.productReceipts.map(productReceipt => (
            <SingleReceiptItem
              key={productReceipt.id}
              productReceipt={productReceipt}
            />
          ))
        )}
        <p>Price without tax: {this.state.fullPriceNoTax}</p>
        <p>Price of lower tax amount: {this.state.fullLowerTaxPrice}</p>
        <p>Price of higher tax amount: {this.state.fullHigherTaxPrice}</p>
        <p>Full price: {this.state.fullPriceWithTax}</p>
        <button onClick={this.handleBuy}>BUY</button>
      </div>
    );
  }
}

export default Receipt;
