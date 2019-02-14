import * as React from 'react'
import {connect} from "react-redux";
import {CurrentPortfolio} from "../actions/actions";

class Portfolio extends React.Component<any, any> {
  render() {
    return (
      <div>
        <table>
          <tbody>
          <tr>
            <th>{this.props.userName.userName}</th>
            <th>Currency</th>
            <th>Qty</th>
            <th>Usd Value</th>
          </tr>
          {this.props.portfolio.portfolio.balances.map((balance: any, index: number) => {
            return (
              <tr key={index.toString()}>
                <td></td>
                <td>{balance.currency}</td>
                <td>{this.props.ledger.portfolio[balance.currency]}</td>
                <td>${balance.usdValue}</td>
              </tr>
            )
          })}
          <tr>
            <td></td>
            <td>USD: ${this.props.ledger.portfolio['USD']}</td>
          </tr>
          </tbody>
        </table>
        <button type="button" onClick={() => this.props.history.push('/order')}>Order</button>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    userName: state.userName,
    portfolio: state.portfolio,
    ledger: state.ledger
  }
}

export default connect(mapStateToProps, { CurrentPortfolio })(Portfolio)
