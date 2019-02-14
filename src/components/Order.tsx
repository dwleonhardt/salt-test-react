import * as React from 'react'
import { connect } from 'react-redux'

class Order extends React.Component<any, any> {

  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <select name="Send:" id="">
          <option value="USD">USD</option>
          <option value="BTC">BTC</option>
        </select>
        <input type="text"/>
        <select name="Receive:" id="">
          <option value="USD">USD</option>
          <option value="BTC">BTC</option>
          <option value="LTC">LTC</option>
          <option value="DOGE">DOGE</option>
          <option value="XMR">XMR</option>
        </select>
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

export default connect(mapStateToProps, {  })(Order)