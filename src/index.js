"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = require("./components/Home");
const react_redux_1 = require("react-redux");
const store_1 = require("./store/store");
ReactDOM.render(<react_redux_1.Provider store={store_1.default}>
    <react_router_dom_1.BrowserRouter>
      <div>
        <react_router_dom_1.Route exact path="/" component={Home_1.Home}/>
      </div>
    </react_router_dom_1.BrowserRouter>
  </react_redux_1.Provider>, document.getElementById("root"));
//# sourceMappingURL=index.js.map