import { Professional } from "../../../entities/Professional";
import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";
import { CustomError } from "../../Error/CustomError";
import { createProfessionalUseCaseValidate } from "./CreateProfessionalUseCaseValidate";
import { ICreateProfessionalRequestDTO } from "./ICreateProfessionalDTO";
export class CreateProfessionalUseCase{
    constructor(
        private professionalRepository: IProfessionalRepository
    ){}

    async execute( data: ICreateProfessionalRequestDTO){
        try {            
            const professional = new Professional(data)
            createProfessionalUseCaseValidate(professional)            
            await this.professionalRepository.save(professional)
        } catch (error) {
            throw new CustomError(error.message, error.statusCode)
        }
    }
}