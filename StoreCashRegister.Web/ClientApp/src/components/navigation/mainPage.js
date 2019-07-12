import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export const MainPage = props => {
  return (
    <div className="main">
      <Link to={`/newReceipt`}>
        <button className="main__button">New Receipt</button>
      </Link>
      <Link to={`/addNewProduct`}>
        <button className="main__button">Add New Item</button>
      </Link>
      <Link to={`/editProducts`}>
        <button className="main__button">Edit items/Add amount</button>
      </Link>
      <Link to={`/viewReceipts`}>
        <button className="main__button">View All Receipts</button>
      </Link>
      <button className="main__button" onClick={() => props.handleLogout()}>
        Log Out
      </button>
    </div>
  );
};

export default MainPage;
