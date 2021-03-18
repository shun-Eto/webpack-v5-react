import * as React from "react";
import { Route, Switch } from "react-router-dom";

//  Pages
import Home from "../Pages/Home";

const Component: React.FC = () => (
  <Switch>
    {/**
     * @description
     * ここで全てルーティングする
     */}
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Component;
