"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions/actions");
class Portfolio extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("table", null,
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, this.props.userName.userName),
                        React.createElement("th", null, "Currency"),
                        React.createElement("th", null, "Qty"),
                        React.createElement("th", null, "Usd Value")),
                    this.props.portfolio.portfolio.balances.map((balance, index) => {
                        return (React.createElement("tr", { key: index.toString() },
                            React.createElement("td", null),
                            React.createElement("td", null, balance.currency),
                            React.createElement("td", null, this.props.ledger.portfolio[balance.currency]),
                            React.createElement("td", null,
                                "$",
                                balance.usdValue)));
                    }),
                    React.createElement("tr", null,
                        React.createElement("td", null),
                        React.createElement("td", null,
                            "USD: $",
                            this.props.ledger.portfolio['USD'])))),
            React.createElement("button", { type: "button", onClick: () => this.props.history.push('/order') }, "Order")));
    }
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        portfolio: state.portfolio,
        ledger: state.ledger
    };
};
exports.default = react_redux_1.connect(mapStateToProps, { CurrentPortfolio: actions_1.CurrentPortfolio })(Portfolio);
//# sourceMappingURL=Portfolio.js.map