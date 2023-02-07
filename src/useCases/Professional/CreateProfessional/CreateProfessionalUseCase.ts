import { Professional } from "../../../entities/Professional";
import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";
import { CustomErro } from "../../Error/CustomError";
import { createProfessionalUseCaseValidate } from "./CreateProfessionalUseCaseValidate";
import { ICreateProfessionalRequestDTO } from "./ICreateProfessionalDTO";
import { RegionEnum } from "../../../entities/enum/RegionEnum";
import { Region } from "../../../entities/Region";
import { CEPProvider } from "../../../providers/implementations/CEPProvider";



export class CreateProfessionalUseCase{
    constructor(
        private professionalRepository: IProfessionalRepository
    ){}

    async execute( data: ICreateProfessionalRequestDTO){
        try {            

            createProfessionalUseCaseValidate(data)

            const professional = new Professional(data)
            professional.regionZoneDescription = this.getZona(professional.regionZoneCode)

            await this.professionalRepository.save(professional)
        } catch (error) {
            throw new CustomErro(error.message, error.statusCode)
        }
    }

    getZona(regionZoneCode: Region){
        switch (regionZoneCode.region) {
            case 0:
                return 'NORTH_ZONE';                       
            case 1: 
                return 'SOUTH_ZONE'
            case 2: 
                return 'EAST_ZONE'
            case 3: 
                return 'WEST_ZONE'
            case 4: 
                return 'CENTRAL_ZONE'
            default:
                return 'NORTH_ZONE'
        }
    }
}