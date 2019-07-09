import React from "react";
import { Link } from "react-router-dom";
import "../css/newTransaction.css";

class newTransaction extends React.Component {
  render() {
    return (
      <div>
        <div className="buying-div">
          <div className="buying-div__all-items"></div>
          <div className="buying-div__basket"></div>
        </div>
        <Link to={`/main`}>
          <button className="button">Exit</button>
        </Link>
      </div>
    );
  }
}

export default newTransaction;
