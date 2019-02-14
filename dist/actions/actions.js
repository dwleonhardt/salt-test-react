"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("./action-types");
exports.UserName = (userName) => {
    return {
        type: action_types_1.USERNAME,
        payload: {
            userName: userName
        }
    };
};
exports.CurrentPortfolio = (portfolio) => {
    return {
        type: action_types_1.PORTFOLIO,
        payload: {
            portfolio: portfolio
        }
    };
};
exports.CurrentLedger = (ledger) => {
    return {
        type: action_types_1.LEDGER,
        payload: {
            portfolio: ledger
        }
    };
};
exports.ExchangeSend = (price) => {
    return {
        type: action_types_1.EXCHANGE_SEND,
        payload: {
            currency: price.name,
            usdPrice: price.usdPrice,
            btcPrice: price.btcPrice
        }
    };
};
exports.ExchangeRecieve = (price) => {
    return {
        type: action_types_1.EXCHANGE_RECEIVE,
        payload: {
            currency: price.name,
            usdPrice: price.usdPrice,
            btcPrice: price.btcPrice
        }
    };
};
//# sourceMappingURL=actions.js.map