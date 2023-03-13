"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEmail = exports.UserAlreadyExists = void 0;
const ts_custom_error_1 = require("ts-custom-error");
class UserAlreadyExists extends ts_custom_error_1.CustomError {
    constructor() {
        super('Usuário já existe');
        this.statusCode = 400;
        Object.setPrototypeOf(this, UserAlreadyExists.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.UserAlreadyExists = UserAlreadyExists;
class InvalidEmail extends ts_custom_error_1.CustomError {
    constructor() {
        super('E-mail inválido');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidEmail.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidEmail = InvalidEmail;
