import { Request, Response } from "express";
import { EditUserUseCase } from "./EditUserUseCase";

export class EditUserController{
    
    constructor(
        private editUserUseCase: EditUserUseCase        
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email } = request.body;
        const { id } = request.params

        try {
            await this.editUserUseCase.execute({
                id,
                name,
                email                
            })

            return response.status(200).send({
                message: 'Registro atualizado com sucesso'                
            });

        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}
