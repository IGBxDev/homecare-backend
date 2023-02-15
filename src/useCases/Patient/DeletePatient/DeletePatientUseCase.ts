import { IPatientRepository } from "../../../repositories/IPatientRepository";
import { CustomError } from "../../Error/CustomError";

export class DeletePatientUseCase{
    
    constructor(private patientRepository: IPatientRepository){}
    
    execute(id: string){
        try {
            this.patientRepository.deleteById(id)    
        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
        
    }
}