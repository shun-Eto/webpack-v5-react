import * as React from "react";
import { Route, Switch } from "react-router-dom";

//  utils
import pathnames from "~assets/utils/pathnames";

//  Pages
import Home from "../Pages/Home";
import Page1 from "~views/Pages/Page1";

const Component: React.FC = () => (
  <Switch>
    <Route exact path={pathnames.Home} component={Home} />
    <Route exact path={pathnames.Page1} component={Page1} />
  </Switch>
);

export default Component;
