"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfessionalUseCase = void 0;
class DeleteProfessionalUseCase {
    constructor(professionalRepository) {
        this.professionalRepository = professionalRepository;
    }
    async execute(professionalDelete) {
        this.professionalRepository.deleteById(professionalDelete.id);
    }
}
exports.DeleteProfessionalUseCase = DeleteProfessionalUseCase;
