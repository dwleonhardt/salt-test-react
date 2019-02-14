"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./store/store");
const Home_1 = require("./components/Home");
const Portfolio_1 = require("./components/Portfolio");
const Order_1 = require("./components/Order");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/portfolio", component: Portfolio_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/order", component: Order_1.default })))), document.getElementById("root"));
//# sourceMappingURL=index.js.map