import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";


export class GetUserController{
    
    constructor(
        private getUserUseCase: GetUserUseCase        
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        try {
            const users = await this.getUserUseCase.execute()

            return response.status(200).json({
                response: users
            });
        } catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}
