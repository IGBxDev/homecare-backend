"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailIsDifferentFromIdFound = exports.InvalidaId = exports.InvalidName = exports.InvalidEmail = exports.UserNotFound = exports.UserAlreadyExists = exports.UserDoesntExist = void 0;
const ts_custom_error_1 = require("ts-custom-error");
class UserDoesntExist extends ts_custom_error_1.CustomError {
    constructor() {
        super('Usuário não existe');
        this.statusCode = 400;
        Object.setPrototypeOf(this, UserDoesntExist.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.UserDoesntExist = UserDoesntExist;
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
class UserNotFound extends ts_custom_error_1.CustomError {
    constructor() {
        super('Usuário não encontrado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, UserNotFound.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.UserNotFound = UserNotFound;
class InvalidEmail extends ts_custom_error_1.CustomError {
    constructor() {
        super('Necessário informar um e-mail');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidEmail.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.InvalidEmail = InvalidEmail;
class InvalidName extends ts_custom_error_1.CustomError {
    constructor() {
        super('Necessário informar um nome');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidName.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.InvalidName = InvalidName;
class InvalidaId extends ts_custom_error_1.CustomError {
    constructor() {
        super('Necessário informar um nome');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidaId.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.InvalidaId = InvalidaId;
class EmailIsDifferentFromIdFound extends ts_custom_error_1.CustomError {
    constructor() {
        super('O Email informado não corresponde ao Id informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, EmailIsDifferentFromIdFound.prototype);
    }
    serializeErrors() {
        return [
            {
                statusCode: this.statusCode
            },
        ];
    }
}
exports.EmailIsDifferentFromIdFound = EmailIsDifferentFromIdFound;
