import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";
import { AppDataSource } from "../../../data-source";
import { DataSourceConnection } from "../../../dataBase/DataSourceConnection";

const dataSourse = new DataSourceConnection(AppDataSource);
const userRepository = new UserRepository(dataSourse)

const getUserUseCase = new GetUserUseCase(
    userRepository
)

const getUserController = new GetUserController(
    getUserUseCase
)

export { getUserUseCase, getUserController }