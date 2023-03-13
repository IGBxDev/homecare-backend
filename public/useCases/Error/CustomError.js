"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyId = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.CustomError = CustomError;
class EmptyId extends Error {
    constructor() {
        super("Necessário informar um id");
        this.statusCode = 400;
        Object.setPrototypeOf(this, EmptyId.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            }];
    }
}
exports.EmptyId = EmptyId;
