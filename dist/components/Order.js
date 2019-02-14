"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
class Order extends React.Component {
    render() {
        return (React.createElement("form", { onSubmit: e => e.preventDefault() },
            React.createElement("select", { name: "Send:", id: "" },
                React.createElement("option", { value: "USD" }, "USD"),
                React.createElement("option", { value: "BTC" }, "BTC")),
            React.createElement("input", { type: "text" }),
            React.createElement("select", { name: "Receive:", id: "" },
                React.createElement("option", { value: "USD" }, "USD"),
                React.createElement("option", { value: "BTC" }, "BTC"),
                React.createElement("option", { value: "LTC" }, "LTC"),
                React.createElement("option", { value: "DOGE" }, "DOGE"),
                React.createElement("option", { value: "XMR" }, "XMR"))));
    }
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        portfolio: state.portfolio,
        ledger: state.ledger
    };
};
exports.default = react_redux_1.connect(mapStateToProps, {})(Order);
//# sourceMappingURL=Order.js.map