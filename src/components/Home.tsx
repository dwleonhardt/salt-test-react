import * as React from 'react'
import {connect} from "react-redux";
import {CurrentLedger, CurrentPortfolio, UserName} from "../actions/actions";

class Home extends React.Component<any, any> {
  userName(name: string) {
    this.props.UserName(name)
  }

  async getUserPortfolio() {
    const portfolioReq = await fetch(`http://localhost:4000/portfolio?userName=${this.props.userName.userName}`)
    const ledgerReq = await fetch(`http://localhost:4000/ledger?userName=${this.props.userName.userName}`)
    const portfolio = await portfolioReq.json()
    const ledger = await ledgerReq.json()
    this.props.CurrentLedger(ledger)
    this.props.CurrentPortfolio(portfolio)
    this.props.history.push('/portfolio')
    console.log(this.props)
  }
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" onChange={e => this.userName(e.target.value)}/>
        <button type="submit" onClick={() => this.getUserPortfolio()}>Submit</button>
      </form>
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

export default connect(mapStateToProps, { UserName, CurrentPortfolio, CurrentLedger })(Home)
