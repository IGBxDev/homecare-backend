import { CustomError } from "ts-custom-error";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class GetUserUseCase {

    constructor(
        private useRepository: IUsersRepository
    ){}
    
    async execute(){
        try {
            return await this.useRepository.all()      
        } catch (error) {
            throw new CustomError(error.messagem, error.statusCode )
        }
    }
}