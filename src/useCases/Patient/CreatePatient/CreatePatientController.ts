import { Request, Response } from "express";
import { ICreatePatientRequestDTO } from "./CreatePatientDTO";
import { CreatePatientUseCase } from "./CreatePatientUseCase";

export class CreatePatientController{
    constructor(private createPatientUseCase: CreatePatientUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const patient: ICreatePatientRequestDTO = request.body
            this.createPatientUseCase.execute(patient)
            return response.status(200).send('Registro criado com sucesso')
        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message
            })
        }
    }
}