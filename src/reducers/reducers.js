"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var action_types_1 = require("../actions/action-types");
var INITIAL_STATE = {
    userName: '',
    portfolio: {},
    ledger: {}
};
exports["default"] = (function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case action_types_1.USERNAME:
            return __assign({}, state, { userName: action.payload });
        case action_types_1.PORTFOLIO:
            return __assign({}, state, { portfolio: action.payload });
        case action_types_1.LEDGER:
            return __assign({}, state, { ledger: action.payload });
        default:
            return state;
    }
});
