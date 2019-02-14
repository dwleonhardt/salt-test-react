import {
  USERNAME,
  PORTFOLIO, LEDGER
} from './action-types'
import {LedgerEntry, UserPortfolio} from "../common/types";

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