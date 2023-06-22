import { PatientRepository } from "../../../repositories/implementations/PatientRepository";
import { GetUPatientController } from "./GetPatientController";
import { GetPatientUseCase } from "./GetPatientUseCase";
import { AppDataSource } from "../../../data-source";
import { DataSourceConnection } from "../../../dataBase/DataSourceConnection";

const dataSourse = new DataSourceConnection(AppDataSource);
const patientRepository = new PatientRepository(dataSourse)

const getPatientUseCase = new GetPatientUseCase(
    patientRepository
)

const getPatientController = new GetUPatientController(
    getPatientUseCase
)

export { getPatientUseCase, getPatientController }