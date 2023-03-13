"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCellPhone = exports.InvalidEmail = exports.InvalidAddress = exports.InvalidNationality = exports.InvalidCPF = exports.InvalidGenderCode = exports.InvalidGender = exports.InvalidName = void 0;
class InvalidName extends Error {
    constructor() {
        super('Nome não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidName.prototype);
    }
    serializeErrors() {
        return [{
                statusCode: this.statusCode
            }];
    }
}
exports.InvalidName = InvalidName;
class InvalidGender extends Error {
    constructor() {
        super('Sexo não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidGender.prototype);
    }
    serializeErrors() {
        return [{ statusCode: this.statusCode }];
    }
}
exports.InvalidGender = InvalidGender;
class InvalidGenderCode extends Error {
    constructor() {
        super('Código do sexo no formato inválido');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidGenderCode.prototype);
    }
    serializeErrors() {
        return [{ statusCode: this.statusCode }];
    }
}
exports.InvalidGenderCode = InvalidGenderCode;
class InvalidCPF extends Error {
    constructor() {
        super('CPF não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidCPF.prototype);
    }
    serializeErrors() {
        return [{ statusCode: this.statusCode }];
    }
}
exports.InvalidCPF = InvalidCPF;
class InvalidNationality extends Error {
    constructor() {
        super('Nacionalidade não informada');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidNationality.prototype);
    }
    serializeErrors() {
        return [{ statusCode: this.statusCode }];
    }
}
exports.InvalidNationality = InvalidNationality;
class InvalidAddress extends Error {
    constructor() {
        super('Endereço não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidAddress.prototype);
    }
    serializeErrors() {
        return [{ statusCode: this.statusCode }];
    }
}
exports.InvalidAddress = InvalidAddress;
class InvalidEmail extends Error {
    constructor() {
        super('E-mail não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidEmail.prototype);
    }
    serializeErrors() {
        return [{ statusCode: this.statusCode }];
    }
}
exports.InvalidEmail = InvalidEmail;
class InvalidCellPhone extends Error {
    constructor() {
        super('Telefone não informado');
        this.statusCode = 400;
        Object.setPrototypeOf(this, InvalidCellPhone.prototype);
    }
    serializeErrors() {
        return [{ statusCode: this.statusCode }];
    }
}
exports.InvalidCellPhone = InvalidCellPhone;
