import { MailTrapMailProvider } from "../../providers/implementations/MailTrapProvider";
import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailTrapMailProvider()
const userRepository = new UserRepository()

const createUserUseCase = new CreateUserUseCase(
    userRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }