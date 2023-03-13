"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessionalUseCase = void 0;
const Professional_1 = require("../../../entities/Professional");
const CustomError_1 = require("../../Error/CustomError");
const CreateProfessionalUseCaseValidate_1 = require("./CreateProfessionalUseCaseValidate");
class CreateProfessionalUseCase {
    constructor(professionalRepository) {
        this.professionalRepository = professionalRepository;
    }
    async execute(data) {
        try {
            const professional = new Professional_1.Professional(data);
            (0, CreateProfessionalUseCaseValidate_1.createProfessionalUseCaseValidate)(professional);
            await this.professionalRepository.save(professional);
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode);
        }
    }
}
exports.CreateProfessionalUseCase = CreateProfessionalUseCase;
