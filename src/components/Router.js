import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Generator from "./generator";
import React from "react";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Generator} />
      <Route path="/workout/:workoutId" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
