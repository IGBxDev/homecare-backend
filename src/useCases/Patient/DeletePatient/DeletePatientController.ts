import { Request, Response, response } from "express";
import { DeletePatientUseCase } from "./DeletePatientUseCase";

export class DeletePatientController{
    
    constructor(private deletePatientUseCase: DeletePatientUseCase){}

    async handle(request: Request, response: Response):Promise<Response>{        
        try {
            const { id } = request.body
            this.deletePatientUseCase.execute(id)
            return response.status(202).end()
        } catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message || 'Internal error'})
        }
    }
}