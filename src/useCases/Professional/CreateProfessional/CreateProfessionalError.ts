export class InvalidEmail extends Error{
    statusCode = 400
    constructor(){
        super('E-mail invalido')
        Object.setPrototypeOf(this, InvalidEmail.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidEmailNotFound extends Error{
    statusCode = 400
    constructor(){
        super('E-mail não informado')
        Object.setPrototypeOf(this, InvalidEmailNotFound.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidFullName extends Error{
    statusCode = 400
    constructor(){
        super('Nome não informado')
        Object.setPrototypeOf(this, InvalidFullName.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidMobile extends Error{
    statusCode = 400
    constructor(){
        super('Telefone não informado')
        Object.setPrototypeOf(this, InvalidMobile.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidCPF extends Error{
    statusCode = 400
    constructor(){
        super('CPF nõ informado')
        Object.setPrototypeOf(this, InvalidCPF.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidBoardNumber extends Error{
    statusCode = 400
    constructor(){
        super('Número do conselho não informado')
        Object.setPrototypeOf(this, InvalidBoardNumber.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidRegion extends Error{
    statusCode = 400
    constructor(){
        super('Região não informado')
        Object.setPrototypeOf(this, InvalidRegion.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidBankAccount extends Error{
    statusCode = 400
    constructor(){
        super('Dados bancário não informado')
        Object.setPrototypeOf(this, InvalidBankAccount.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}


export class InvalidSpecialty extends Error{
    statusCode = 400
    constructor(){
        super('Especialidade não informada')
        Object.setPrototypeOf(this, InvalidSpecialty.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}


export class InvalidCity extends Error{
    statusCode = 400
    constructor(){
        super('Cidade não informado')
        Object.setPrototypeOf(this, InvalidCity.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}


export class InvalidLogradouro extends Error{
    statusCode = 400
    constructor(){
        super('Endereço não informado')
        Object.setPrototypeOf(this, InvalidLogradouro.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}


export class InvalidNumber extends Error{
    statusCode = 400
    constructor(){
        super('Número da residência não informado')
        Object.setPrototypeOf(this, InvalidNumber.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidPostalCode extends Error{
    statusCode = 400
    constructor(){
        super('cep não informado')
        Object.setPrototypeOf(this, InvalidPostalCode.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}


export class InvalidUF extends Error{
    statusCode = 400
    constructor(){
        super('UF não informado')
        Object.setPrototypeOf(this, InvalidUF.prototype)
    }

    serializeErrors(){
        return[{
            statusCode: this.statusCode
        },]
    }
}

export class InvalidRegionCode extends Error{
    statusCode = 400
    constructor(){
        super('Código da Região invalido')
        Object.setPrototypeOf(this, InvalidRegionCode.prototype)
    }

    serializeErrors(){
        return [{
            statusCode: this.statusCode
        },]
    }
}