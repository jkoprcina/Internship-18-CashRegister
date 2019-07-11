import React from "react";
import SingleReceiptItem from "./singleReceiptItem";
import "../../css/newTransaction.css";

class Receipt extends React.Component {
  state = {
    basket: [],
    loading: true,
    cashRegister: "",
    cashier: { firstName: "", lastName: "" }
  };

  componentDidMount() {
    this.setState({ basket: this.props.basket });
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
        {console.log(this.state.basket)}
        <h1>Receipt</h1>
        {this.state.basket === [] ? (
          <p />
        ) : (
          this.state.basket.map(productReceipt => (
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
