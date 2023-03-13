"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfessionalController = void 0;
class CreateProfessionalController {
    constructor(createProfessionalUseCase) {
        this.createProfessionalUseCase = createProfessionalUseCase;
    }
    async handle(request, response) {
        try {
            const professional = request.body;
            await this.createProfessionalUseCase.execute(professional);
            return response.status(200).send('Registro criado com sucesso');
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.CreateProfessionalController = CreateProfessionalController;
