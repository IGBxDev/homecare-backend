import { Request, Response } from "express";
import { DeleteProfessionalUseCase } from "./DeleteProfessionalUseCase";

export class DeleteProfessionalController{

    constructor(
        private deleteProfessionalUseCase: DeleteProfessionalUseCase
    ){}
    
    async handle( request: Request, response: Response): Promise<Response>{
        try {
            const { id } = request.params
            const professionalDelete: IDeleteProfessionalRequestDTO = {
                id
            }
            
            this.deleteProfessionalUseCase.execute(professionalDelete)

            response.status(200).send()
        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}