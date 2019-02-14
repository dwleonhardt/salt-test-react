"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions/actions");
// export interface HomeProps {
//   compiler: string,
//   framework: string
// }
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    userName(name) {
        this.props.UserName(name);
        console.log(this.state);
    }
    render() {
        return (<form onSubmit={e => e.preventDefault()}>
        <input type="text" onChange={e => this.userName(e.target.value)}/>
      </form>);
    }
}
exports.Home = Home;
const mapStateToProps = (state) => {
    return {
        userName: state.userName,
    };
};
exports.default = react_redux_1.connect(mapStateToProps, { UserName: actions_1.UserName })(Home);
//# sourceMappingURL=Home.js.map