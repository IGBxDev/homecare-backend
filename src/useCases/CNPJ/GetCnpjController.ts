import { Request, Response } from "express";
import { CNPJProvider } from "../../providers/implementations/CNPJProvider";

export class GetCnpjController{
    constructor(private cnpjProvider: CNPJProvider){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const {cnpj} = request.params
            const address = await this.cnpjProvider.getCNPJ(cnpj)
            return response.status(200).send(address)
        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Internal error'
            })
        }
    }
}