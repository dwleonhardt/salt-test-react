import {
  LEDGER,
  PORTFOLIO,
  USERNAME
} from '../actions/action-types'

const INITIAL_STATE = {
  userName: '',
  portfolio: {},
  ledger: {}
}

export default (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case USERNAME:
      return { ...state, userName: action.payload }
    case PORTFOLIO:
      return { ...state, portfolio: action.payload }
    case LEDGER:
      return { ...state, ledger: action.payload }
    default:
      return state
  }
}