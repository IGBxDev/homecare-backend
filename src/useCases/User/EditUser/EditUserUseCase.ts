import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { CustomError } from "../../Error/CustomError";
import { EmailIsDifferentFromIdFound, InvalidaId, InvalidEmail, InvalidName, UserAlreadyExists, UserNotFound } from "./EditUserErrors";
import { EditUserRequestType, IEditUserRequestDTO } from "./IEditUserDTO";

export class EditUserUseCase{

    constructor(
        private useRepository: IUsersRepository
    ){}

    async execute(data: IEditUserRequestDTO){
        try {

            if(data.email === '' || data.email === undefined){
                throw new InvalidEmail()
            }

            if(data.name === '' || data.name === undefined){
                throw new InvalidName()
            }

            if(data.id === '' || data.id === undefined){
                throw new InvalidaId()
            }

            const user: EditUserRequestType = {   
                id: data.id,             
                email: data.email,
                name: data.name
            }

            const userAlreadyExists = await this.useRepository.findByEmail(user.email)

            if(userAlreadyExists.length === 0){
                throw new UserNotFound()
            }

            if(userAlreadyExists[0]?._id.toString() != user.id.toString()){
                throw new EmailIsDifferentFromIdFound()
            }
            
            this.useRepository.edit(user)
        } catch (error) {
            throw new CustomError(error.message, error.statusCode || 500 )
        }
    }
}