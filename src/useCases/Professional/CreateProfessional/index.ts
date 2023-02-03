import { ProfessionalRepository } from "../../../repositories/implementations/ProfessionalRepository";
import { CreateProfessionalController } from "./CreateProfessionalController";
import { CreateProfessionalUseCase } from "./CreateProfessionalUseCase";
import { AppDataSource } from "../../../data-source";
import { DataSourceConnection } from "../../../dataBase/DataSourceConnection";

const dataSourse = new DataSourceConnection(AppDataSource);
const professionalRepository = new ProfessionalRepository(dataSourse)

const createProfessionalUseCase = new CreateProfessionalUseCase(
    professionalRepository
)

const createProfessionalController = new CreateProfessionalController(
    createProfessionalUseCase
)

export { createProfessionalUseCase, createProfessionalController }