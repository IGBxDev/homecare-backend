import { Request, Response } from "express";
import { CreateProfessionalUseCase } from "./CreateProfessionalUseCase";
import { ICreateProfessionalRequestDTO } from "./ICreateProfessionalDTO";

export class CreateProfessionalController{

    constructor(
        private createProfessionalUseCase: CreateProfessionalUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const professional: ICreateProfessionalRequestDTO = request.body
            await this.createProfessionalUseCase.execute(professional)  
            return response.status(200).send('Registro criado com sucesso')
        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            }) 
        }
    }
}