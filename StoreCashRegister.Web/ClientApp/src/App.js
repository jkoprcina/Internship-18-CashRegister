import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Main from "./components/main";
import NewTransaction from "./components/newTransaction/newTransaction";
import AddNewProduct from "./components/addNewProduct";
import EditProducts from "./components/editProducts";
import ViewTransactions from "./components/viewTransactions";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" render={props => <Main />} />
        <Route path="/newTransaction" render={props => <NewTransaction />} />
        <Route path="/addNewProduct" render={props => <AddNewProduct />} />
        <Route path="/editProducts" render={props => <EditProducts />} />
        <Route
          path="/viewTransactions"
          render={props => <ViewTransactions />}
        />
        <Redirect to="/main" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
