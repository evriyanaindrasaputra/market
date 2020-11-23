import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart, Detail, Home } from "../Pages";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
