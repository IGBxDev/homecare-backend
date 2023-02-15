export class InvalidName extends Error{
    statusCode = 400
    constructor(){
        super('Nome não informado')
        Object.setPrototypeOf(this, InvalidName.prototype)
    }

    serializeErrors(){
        return [{
            statusCode: this.statusCode
        }]
    }
}

export class InvalidGender extends  Error{
    statusCode = 400
    constructor(){
        super('Sexo não informado')
        Object.setPrototypeOf(this, InvalidGender.prototype)
    }

    serializeErrors(){
        return [{ statusCode: this.statusCode }]
    }
}

export class InvalidGenderCode extends Error{
    statusCode = 400
    constructor(){
        super('Código do sexo no formato inválido')
        Object.setPrototypeOf(this, InvalidGenderCode.prototype)
    }

    serializeErrors(){
        return [{ statusCode: this.statusCode}]
    }
}

export class InvalidCPF extends Error{
    statusCode = 400
    constructor(){
        super('CPF não informado')
        Object.setPrototypeOf(this, InvalidCPF.prototype)
    }

    serializeErrors(){
        return [{ statusCode: this.statusCode}]
    }

}

export class InvalidNationality extends Error{
    statusCode = 400
    constructor(){
        super('Nacionalidade não informada')
        Object.setPrototypeOf(this, InvalidNationality.prototype)
    }

    serializeErrors(){
        return [{ statusCode: this.statusCode}]
    }
}

export class InvalidAddress extends Error{
    statusCode = 400
    constructor(){
        super('Endereço não informado')
        Object.setPrototypeOf(this, InvalidAddress.prototype)
    }

    serializeErrors(){
        return [{ statusCode: this.statusCode }]
    }
}

export class InvalidEmail extends Error{
    statusCode = 400
    constructor(){
        super('E-mail não informado')
        Object.setPrototypeOf(this, InvalidEmail.prototype)
    }

    serializeErrors(){
        return [{ statusCode: this.statusCode }]
    }
}

export class InvalidCellPhone extends Error{
    statusCode = 400
    constructor(){
        super('Telefone não informado')
        Object.setPrototypeOf(this, InvalidCellPhone.prototype)
    }

    serializeErrors(){
        return [{ statusCode: this.statusCode }]
    }
}
