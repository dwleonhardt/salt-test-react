import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store/store";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Order from "./components/Order";

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/portfolio" component={ Portfolio }/>
        <Route exact path="/order" component={ Order }/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)