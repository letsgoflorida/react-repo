//Import React
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
//Import Styles

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
//Import serviceWorker
import * as serviceWorker from "./serviceWorker";
//Import components
import App from "./App";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"));

serviceWorker.unregister();
