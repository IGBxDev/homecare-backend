"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePatientUseCase = void 0;
const CustomError_1 = require("../../Error/CustomError");
class DeletePatientUseCase {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    execute(id) {
        try {
            this.patientRepository.delete(id);
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode);
        }
    }
}
exports.DeletePatientUseCase = DeletePatientUseCase;
