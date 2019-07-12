import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Index from "./components/navigation/index";
import NewTransaction from "./components/newTransaction/newTransaction";
import AddNewProduct from "./components/addNewProduct";
import EditProducts from "./components/editProducts";
import ViewTransactions from "./components/viewTransactions";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={props => <Index />} />
        <Route path="/newTransaction" render={props => <NewTransaction />} />
        <Route path="/addNewProduct" render={props => <AddNewProduct />} />
        <Route path="/editProducts" render={props => <EditProducts />} />
        <Route
          path="/viewTransactions"
          render={props => <ViewTransactions />}
        />
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
