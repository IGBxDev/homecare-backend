"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatientController = void 0;
class CreatePatientController {
    constructor(createPatientUseCase) {
        this.createPatientUseCase = createPatientUseCase;
    }
    async handle(request, response) {
        try {
            const patient = request.body;
            this.createPatientUseCase.execute(patient);
            return response.status(200).send('Registro criado com sucesso');
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message
            });
        }
    }
}
exports.CreatePatientController = CreatePatientController;
