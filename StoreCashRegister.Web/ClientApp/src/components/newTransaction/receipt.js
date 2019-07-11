import React from "react";
import SingleReceiptItem from "./singleReceiptItem";
import "../../css/newTransaction.css";

class Receipt extends React.Component {
  state = {
    receipt: [],
    cashRegister: "",
    cashier: { firstName: "", lastName: "" }
  };

  componentDidMount() {
    this.setState({ receipt: this.props.receipt });
    this.setState({
      cashRegister: localStorage.getItem("cashRegisterId"),
      cashier: {
        firstName: localStorage.getItem("firstName"),
        lastName: localStorage.getItem("lastName")
      }
    });
  }

  handleBuy() {
    //Make new receipt
  }

  render() {
    return (
      <div className="buying-div__receipt">
        <h1>Receipt</h1>
        {console.log(this.state.receipt)}
        {this.state.receipt === [] ? (
          <p />
        ) : (
          this.state.receipt.map(productReceipt => (
            <SingleReceiptItem
              key={productReceipt.id}
              productReceipt={productReceipt}
            />
          ))
        )}
        <p>Cash Register Number:{this.state.cashRegister}</p>
        <p>Cashier Name:{this.state.cashier.firstName}</p>
        <p>
          Cashier Last Name:
          {this.state.cashier.lastName}
        </p>
        <button onClick={this.handleBuy}>BUY</button>
      </div>
    );
  }
}

export default Receipt;
