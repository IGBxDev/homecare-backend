import { CreatePatientController } from "./CreatePatientController";
import { CreatePatientUseCase } from "./CreatePatientUseCase";
import { PatientRepository } from "../../../repositories/implementations/PatientRepository";
import { AppDataSource } from '../../../data-source'
import { DataSourceConnection } from "../../../dataBase/DataSourceConnection";
import { Patient } from "../../../entities/Patient";

const dataSourse = new DataSourceConnection(AppDataSource);
const repository = new PatientRepository(dataSourse)
const createPatientUseCase = new CreatePatientUseCase(repository)    
const createPatientController = new CreatePatientController(createPatientUseCase)

export { createPatientController, createPatientUseCase} 