import { IPatientRepository } from "../../../repositories/IPatientRepository";
import { CustomError } from "../../Error/CustomError";
import { ICreatePatientRequestDTO } from "./CreatePatientDTO";
import { createPatientUseCaseValidation } from './CreatePatientUseCaseValidation'
import { Patient } from "../../../entities/Patient";

export class CreatePatientUseCase{

    constructor(private patientRepository: IPatientRepository){}

    async execute(data: ICreatePatientRequestDTO){
        try {      
            const patient = new Patient(data)
            createPatientUseCaseValidation(patient)            
            this.patientRepository.add(patient)
        }catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }
}