"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_1 = require("../actions/action-types");
const INITIAL_STATE = {
    userName: '',
    portfolio: {},
    ledger: {}
};
exports.default = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case action_types_1.USERNAME:
            return Object.assign({}, state, { userName: action.payload });
        case action_types_1.PORTFOLIO:
            return Object.assign({}, state, { portfolio: action.payload });
        case action_types_1.LEDGER:
            return Object.assign({}, state, { ledger: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=reducers.js.map