"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.elseThrow = void 0;
const elseThrow = (error) => {
    throw new Error(error);
};
exports.elseThrow = elseThrow;
const logError = (error, log) => {
    return error instanceof Error
        ? log(`${new Date().toISOString()}\r\n${error.name}\r\n${error.message}\r\n${error.stack}`)
        : log(error);
};
exports.logError = logError;
