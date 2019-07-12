import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Index from "./components/navigation/index";
import NewReceipt from "./components/newReceipt/newReceipt";
import AddNewProduct from "./components/addNewProduct";
import EditProducts from "./components/editProducts";
import ViewReceipts from "./components/viewReceipts/viewReceipts";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={props => <Index />} />
        <Route path="/newReceipt" render={props => <NewReceipt />} />
        <Route path="/addNewProduct" render={props => <AddNewProduct />} />
        <Route path="/editProducts" render={props => <EditProducts />} />
        <Route path="/viewReceipts" render={props => <ViewReceipts />} />
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
