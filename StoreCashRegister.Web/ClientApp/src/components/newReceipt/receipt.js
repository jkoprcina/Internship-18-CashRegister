import React from "react";
import SingleReceiptItem from "./singleReceiptItem";
import * as math from "../../utils/math";
import { addReceipt, addProductReceipts } from "./newReceiptUtils";
import "./newReceipt.css";

class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cashRegisterId: "",
      cashier: { firstName: "", lastName: "", id: "" },
      fullPriceNoTax: 0,
      fullPriceWithTax: 0,
      fullLowerTaxPrice: 0,
      fullHigherTaxPrice: 0
    };
  }

  componentDidMount() {
    this.setState({
      cashRegisterId: localStorage.getItem("cashRegisterId"),
      cashier: {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName"),
        id: localStorage.getItem("cashierId")
      }
    });
  }

  componentWillReceiveProps = () => {
    this.countPrices();
  };

  countPrices = () => {
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
  };

  handleBuy = productReceipts => {
    if (productReceipts.length > 0) {
      addReceipt(
        this.state.fullPriceNoTax,
        this.state.fullPriceWithTax,
        this.state.fullLowerTaxPrice,
        this.state.fullHigherTaxPrice,
        this.state.cashRegisterId,
        this.state.cashier.id
      ).then(receipt => {
        addProductReceipts(productReceipts, receipt.id);
        this.setState({
          fullPriceNoTax: 0,
          fullPriceWithTax: 0,
          fullLowerTaxPrice: 0,
          fullHigherTaxPrice: 0
        });
      });
      this.props.itemsBought();
    }
  };

  render() {
    return (
      <div className="buying-div__receipt">
        <h1>Receipt</h1>
        <p>Cash Register Number:{this.state.cashRegisterId}</p>
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
        <button onClick={() => this.handleBuy(this.props.productReceipts)}>
          BUY
        </button>
      </div>
    );
  }
}

export default Receipt;
