import { User } from "../../../entities/User";
import { IMailProvider } from "../../../providers/IMailProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { CustomErro } from "../../Error/CustomError";
import { InvalidEmail, UserAlreadyExists } from "./CreateUserErrors";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";


export class CreateUserUseCase {

    constructor(
       private usersRepository: IUsersRepository,
       private mailProvider: IMailProvider
    ){}

    async execute(data: ICreateUserRequestDTO){
        try {

            if(data.email === undefined || !data.email){
                throw new InvalidEmail()
            }
            const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

            if(userAlreadyExists.length != 0){
                throw new UserAlreadyExists()
            }
    
            const user = new User(data)
    
            await this.usersRepository.save(user)
    
            // await this.mailProvider.sendMail({
            //     to: {
            //         name: data.name,
            //         email: data.email
            //     },
            //     from: {
            //         name: "Equipe do meu app",
            //         email: "donnie.torphy51@ethereal.email",
            //     },
            //     subject: "Seja bem-vindo a plataforma",
            //     body: "<p>Você já pode fazer login em nossa plataforma </p>"
            // })   
        } catch (error) {
            throw new CustomErro(error.message, error.statusCode)
        }
    }
}