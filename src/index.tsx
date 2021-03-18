import * as React from "react";
import * as ReactDOM from "react-dom";
import "../public/styles.css";

//	FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

//  Route
import Route from "./views/Route";

//  providers
import Providers from "./views/Providers";

ReactDOM.render(
  <Providers>
    <Route />
  </Providers>,
  document.getElementById("root")
);
