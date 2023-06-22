import { Request, Response } from "express";
import { GetPatientUseCase } from "./GetPatientUseCase";


export class GetUPatientController{
    
    constructor(
        private getPatientUseCase: GetPatientUseCase        
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const patient = await this.getPatientUseCase.execute()

            return response.status(200).json(patient);
        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}
