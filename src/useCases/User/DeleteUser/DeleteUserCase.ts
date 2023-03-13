import { IUsersRepository } from "../../../repositories/IUsersRepository";
import {CustomError, EmptyId} from '../../Error/CustomError'

export class DeleteUserCase {

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute(userDelete: IDeleteUserRequestDTO){
        try {
            if(!userDelete.id || userDelete.id === undefined){
                throw new EmptyId()
            }
    
            this.usersRepository.delete(userDelete.id)

        } catch (error) {
            throw new CustomError (error.message, error.statusCode)
        }      
    }
}