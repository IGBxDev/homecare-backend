"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../entities/User");
const CustomError_1 = require("../../Error/CustomError");
const CreateUserErrors_1 = require("./CreateUserErrors");
class CreateUserUseCase {
    constructor(usersRepository, mailProvider) {
        this.usersRepository = usersRepository;
        this.mailProvider = mailProvider;
    }
    async execute(data) {
        try {
            if (data.email === undefined || !data.email) {
                throw new CreateUserErrors_1.InvalidEmail();
            }
            const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
            if (userAlreadyExists.length != 0) {
                throw new CreateUserErrors_1.UserAlreadyExists();
            }
            const user = new User_1.User(data);
            await this.usersRepository.add(user);
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
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode);
        }
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
