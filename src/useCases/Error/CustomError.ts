export class CustomError extends Error{
    private statusCode: number

    constructor(message: string, statusCode: number ){        
        super(message)
        this.statusCode = statusCode
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
 

export class EmptyId extends Error{
  statusCode = 400
  constructor(){
    super("Necessário informar um id")
    Object.setPrototypeOf(this, EmptyId.prototype)
  }

  serializeErrors(){
    return[{
      statusCode: this.statusCode
    }]
  }
}
