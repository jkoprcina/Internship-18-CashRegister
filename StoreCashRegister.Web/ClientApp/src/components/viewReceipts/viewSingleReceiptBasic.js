import React from "react";

export const ViewSingleReceiptBasic = props => {
  return (
    <div>
      {this.props.receipt.name} {this.props.receipt.fullPrice}
      <button onClick={() => this.handleSelect()}>View details</button>
    </div>
  );
};

export default ViewSingleReceiptBasic;
