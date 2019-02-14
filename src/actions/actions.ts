import {
  USERNAME,
  PORTFOLIO, LEDGER, EXCHANGE_SEND, EXCHANGE_RECEIVE
} from './action-types'
import {CoinPrice, LedgerEntry, UserPortfolio} from "../common/types";

export const UserName = (userName: string) => {
  return {
    type: USERNAME,
    payload: {
      userName: userName
    }
  }
}

export const CurrentPortfolio = (portfolio: UserPortfolio) => {
  return {
    type: PORTFOLIO,
    payload: {
      portfolio: portfolio
    }
  }
}

export const CurrentLedger = (ledger: LedgerEntry) => {
  return {
    type: LEDGER,
    payload: {
      portfolio: ledger
    }
  }
}

export const ExchangeSend = (price: CoinPrice) => {
  return {
    type: EXCHANGE_SEND,
    payload: {
      currency: price.name,
      usdPrice: price.usdPrice,
      btcPrice: price.btcPrice
    }
  }
}

export const ExchangeRecieve = (price: CoinPrice) => {
  return {
    type: EXCHANGE_RECEIVE,
    payload: {
      currency: price.name,
      usdPrice: price.usdPrice,
      btcPrice: price.btcPrice
    }
  }
}