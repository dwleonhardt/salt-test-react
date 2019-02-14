"use strict";
exports.__esModule = true;
var action_types_1 = require("./action-types");
exports.UserName = function (userName) {
    return {
        type: action_types_1.USERNAME,
        payload: {
            userName: userName
        }
    };
};
exports.CurrentPortfolio = function (portfolio) {
    return {
        type: action_types_1.PORTFOLIO,
        payload: {
            portfolio: portfolio
        }
    };
};
exports.CurrentLedger = function (ledger) {
    return {
        type: action_types_1.LEDGER,
        payload: {
            portfolio: ledger
        }
    };
};
