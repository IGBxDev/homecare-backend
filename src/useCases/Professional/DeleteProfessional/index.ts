import { ProfessionalRepository } from "../../../repositories/implementations/ProfessionalRepository";
import { DeleteProfessionalController } from "./DeleteProfessionalController";
import { DeleteProfessionalUseCase } from "./DeleteProfessionalUseCase";
import { AppDataSource } from "../../../data-source";
import { DataSourceConnection } from "../../../dataBase/DataSourceConnection";

const dataSourse = new DataSourceConnection(AppDataSource);
const professionalRepository = new ProfessionalRepository(dataSourse)

const deleteProfessionalUseCase = new DeleteProfessionalUseCase(
    professionalRepository
)

const deleteProfessionalController = new DeleteProfessionalController(
    deleteProfessionalUseCase
)

export { deleteProfessionalUseCase, deleteProfessionalController }