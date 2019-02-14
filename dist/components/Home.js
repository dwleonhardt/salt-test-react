"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions/actions");
class Home extends React.Component {
    userName(name) {
        this.props.UserName(name);
    }
    async getUserPortfolio() {
        const portfolioReq = await fetch(`http://localhost:4000/portfolio?userName=${this.props.userName.userName}`);
        const ledgerReq = await fetch(`http://localhost:4000/ledger?userName=${this.props.userName.userName}`);
        const portfolio = await portfolioReq.json();
        const ledger = await ledgerReq.json();
        this.props.CurrentLedger(ledger);
        this.props.CurrentPortfolio(portfolio);
        this.props.history.push('/portfolio');
        console.log(this.props);
    }
    render() {
        return (React.createElement("form", { onSubmit: e => e.preventDefault() },
            React.createElement("input", { type: "text", onChange: e => this.userName(e.target.value) }),
            React.createElement("button", { type: "submit", onClick: () => this.getUserPortfolio() }, "Submit")));
    }
}
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
        portfolio: state.portfolio,
        ledger: state.ledger
    };
};
exports.default = react_redux_1.connect(mapStateToProps, { UserName: actions_1.UserName, CurrentPortfolio: actions_1.CurrentPortfolio, CurrentLedger: actions_1.CurrentLedger })(Home);
//# sourceMappingURL=Home.js.map