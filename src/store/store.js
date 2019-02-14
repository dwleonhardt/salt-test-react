"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_logger_1 = require("redux-logger");
const reducers_1 = require("../reducers/reducers");
const store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_logger_1.default));
exports.default = store;
//# sourceMappingURL=store.js.map