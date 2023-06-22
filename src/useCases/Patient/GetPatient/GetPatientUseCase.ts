import { CustomError } from "ts-custom-error";
import { IPatientRepository } from "../../../repositories/IPatientRepository";

export class GetPatientUseCase {

    constructor(
        private patientRepository: IPatientRepository
    ){}
    
    async execute(){
        try {
            return await this.patientRepository.all()      
        } catch (error) {
            throw new CustomError(error.messagem, error.statusCode )
        }
    }
}