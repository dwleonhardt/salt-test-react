import BigNumber from "bignumber.js";

export type CoinName = 'BTC' | 'LTC' | 'DOGE' | 'XMR' | 'USD'

export interface PortfolioValue {
  currency: CoinName,
  usdValue: BigNumber
}

export interface UserPortfolio {
  userName: string,
  balances: Array<PortfolioValue>
}

export interface LedgerEntry {
  userName: string,
  USD: BigNumber,
  BTC: BigNumber,
  DOGE: BigNumber,
  LTC: BigNumber,
  XMR: BigNumber,
  created: Date
}

export interface CoinPrice {
  name: CoinName,
  usdPrice: BigNumber
  btcPrice: BigNumber
}