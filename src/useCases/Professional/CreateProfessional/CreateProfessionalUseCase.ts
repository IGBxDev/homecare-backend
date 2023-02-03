import { Professional } from "../../../entities/Professional";
import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";
import { CustomErro } from "../../Error/CustomError";
import { createProfessionalUseCaseValidate } from "./CreateProfessionalUseCaseValidate";
import { ICreateProfessionalRequestDTO } from "./ICreateProfessionalDTO";



export class CreateProfessionalUseCase{
    constructor(
        private professionalRepository: IProfessionalRepository
    ){}

    async execute( data: ICreateProfessionalRequestDTO){
        try {            

            createProfessionalUseCaseValidate(data)

            const professional = new Professional(data)

            await this.professionalRepository.save(professional)
        } catch (error) {
            throw new CustomErro(error.message, error.statusCode)
        }
    }
}