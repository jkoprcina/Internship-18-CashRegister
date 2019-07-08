import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/login";
import NewTransaction from "./components/newTransaction.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" render={props => <Main />} />
        <Route path="/newTransaction" render={props => <NewTransaction />} />
        <Route path="/login" render={<Login />} />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
