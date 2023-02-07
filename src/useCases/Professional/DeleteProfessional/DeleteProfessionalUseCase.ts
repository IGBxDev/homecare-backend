import { IProfessionalRepository } from "../../../repositories/IProfessionalRepository";

export class DeleteProfessionalUseCase{
    
    constructor(
        private professionalRepository: IProfessionalRepository
    ){}

    async execute(professionalDelete: IDeleteUserRequestDTO){
        this.professionalRepository.deleteById(professionalDelete.id)
    }
}