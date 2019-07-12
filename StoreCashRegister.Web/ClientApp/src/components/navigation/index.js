import React from "react";
import Main from "./mainPage";
import Login from "./login";
import "./navigation.css";

class Index extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount = () => {
    if (localStorage.getItem("cashRegisterId") !== undefined) {
      this.setState({ loggedIn: true });
    }
  };
  handleLogin = () => {
    this.setState({ loggedIn: true });
  };

  handleLogout = () => {
    this.setState({ loggedIn: false });
    localStorage.clear();
  };

  render() {
    return this.state.loggedIn ? (
      <Main handleLogout={this.handleLogout} loggedIn={this.state.loggedIn} />
    ) : (
      <Login handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />
    );
  }
}

export default Index;
