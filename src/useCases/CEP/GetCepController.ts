import { Request, Response } from "express";
import { CEPProvider } from "../../providers/implementations/CEPProvider";

export class GetCepController{
    constructor(private cepProvider: CEPProvider){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const {cep} = request.params
            const address = await this.cepProvider.getAddressByCep(cep)
            return response.status(200).send(address)
        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Internal error'
            })
        }
    }
}