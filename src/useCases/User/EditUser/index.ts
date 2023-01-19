import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { EditUserController } from "./EditUserController";
import { EditUserUseCase } from "./EditUserUseCase";
import { AppDataSource } from "../../../data-source";
import { DataSourceConnection } from "../../../dataBase/DataSourceConnection";

const dataSourse = new DataSourceConnection(AppDataSource);
const userRepository = new UserRepository(dataSourse)

const editUserUseCase = new EditUserUseCase(
    userRepository
)

const editUserController = new EditUserController(
    editUserUseCase
)

export { editUserUseCase, editUserController }