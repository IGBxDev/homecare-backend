"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidRegionCode = exports.InvalidUF = exports.InvalidPostalCode = exports.InvalidNumber = exports.InvalidLogradouro = exports.InvalidCity = exports.InvalidSpecialty = exports.InvalidBankAccount = exports.InvalidRegion = exports.InvalidBoardNumber = exports.InvalidCPF = exports.InvalidMobile = exports.InvalidFullName = exports.InvalidEmailNotFound = exports.InvalidEmail = void 0;
class InvalidEmail extends Error {
    constructor() {
        super('E-mail invalido');
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
class InvalidEmailNotFound extends Error {
    constructor() {
        super('E-mail não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidEmailNotFound.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidEmailNotFound = InvalidEmailNotFound;
class InvalidFullName extends Error {
    constructor() {
        super('Nome não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidFullName.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidFullName = InvalidFullName;
class InvalidMobile extends Error {
    constructor() {
        super('Telefone não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidMobile.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidMobile = InvalidMobile;
class InvalidCPF extends Error {
    constructor() {
        super('CPF nõ informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidCPF.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidCPF = InvalidCPF;
class InvalidBoardNumber extends Error {
    constructor() {
        super('Número do conselho não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidBoardNumber.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidBoardNumber = InvalidBoardNumber;
class InvalidRegion extends Error {
    constructor() {
        super('Região não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidRegion.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidRegion = InvalidRegion;
class InvalidBankAccount extends Error {
    constructor() {
        super('Dados bancário não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidBankAccount.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidBankAccount = InvalidBankAccount;
class InvalidSpecialty extends Error {
    constructor() {
        super('Especialidade não informada');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidSpecialty.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidSpecialty = InvalidSpecialty;
class InvalidCity extends Error {
    constructor() {
        super('Cidade não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidCity.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidCity = InvalidCity;
class InvalidLogradouro extends Error {
    constructor() {
        super('Endereço não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidLogradouro.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidLogradouro = InvalidLogradouro;
class InvalidNumber extends Error {
    constructor() {
        super('Número da residência não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidNumber.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidNumber = InvalidNumber;
class InvalidPostalCode extends Error {
    constructor() {
        super('cep não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidPostalCode.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidPostalCode = InvalidPostalCode;
class InvalidUF extends Error {
    constructor() {
        super('UF não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidUF.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidUF = InvalidUF;
class InvalidRegionCode extends Error {
    constructor() {
        super('Código da Região invalido');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidRegionCode.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            },];
    }
}
exports.InvalidRegionCode = InvalidRegionCode;
