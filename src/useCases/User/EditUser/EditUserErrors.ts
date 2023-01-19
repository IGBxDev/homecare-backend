
import { CustomError } from 'ts-custom-error'

export class UserDoesntExist extends CustomError{
    statusCode = 400
    constructor(){
        super('Usuário não existe')
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

export class UserAlreadyExists extends CustomError{
    statusCode = 400
    constructor(){
        super('Usuário já existe')
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

export class UserNotFound extends CustomError{
    statusCode = 400
    constructor(){
        super('Usuário já existe')
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

export class InvalidEmail extends CustomError{
    statusCode = 400
    constructor(){
        super('Necessário informar um e-mail')
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

export class InvalidName extends CustomError{
    statusCode = 400
    constructor(){
        super('Necessário informar um nome')
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

export class InvalidaId extends CustomError{
    statusCode = 400
    constructor(){
        super('Necessário informar um nome')
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

export class EmailIsDifferentFromIdFound extends CustomError{
    statusCode = 400
    constructor(){
        super('O Email informado não corresponde ao Id informado')
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