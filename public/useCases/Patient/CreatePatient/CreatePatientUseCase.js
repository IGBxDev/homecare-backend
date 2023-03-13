"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatientUseCase = void 0;
const CustomError_1 = require("../../Error/CustomError");
const CreatePatientUseCaseValidation_1 = require("./CreatePatientUseCaseValidation");
const Patient_1 = require("../../../entities/Patient");
class CreatePatientUseCase {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    async execute(data) {
        try {
            const patient = new Patient_1.Patient(data);
            (0, CreatePatientUseCaseValidation_1.createPatientUseCaseValidation)(patient);
            this.patientRepository.add(patient);
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode);
        }
    }
}
exports.CreatePatientUseCase = CreatePatientUseCase;
