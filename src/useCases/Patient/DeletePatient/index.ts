import { DeletePatientController } from "./DeletePatientController";
import { DeletePatientUseCase } from "./DeletePatientUseCase";
import { PatientRepository } from "../../../repositories/implementations/PatientRepository";
import { AppDataSource } from '../../../data-source'
import { DataSourceConnection } from "../../../dataBase/DataSourceConnection";


const dataSourse = new DataSourceConnection(AppDataSource);
const repository = new PatientRepository(dataSourse)
const deletePatientUseCase = new DeletePatientUseCase(repository)    
const deletePatientController = new DeletePatientController(deletePatientUseCase)

export { deletePatientController, deletePatientUseCase} 