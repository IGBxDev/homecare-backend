"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfessionalController = void 0;
class DeleteProfessionalController {
    constructor(deleteProfessionalUseCase) {
        this.deleteProfessionalUseCase = deleteProfessionalUseCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.params;
            const professionalDelete = {
                id
            };
            this.deleteProfessionalUseCase.execute(professionalDelete);
            response.status(200).send();
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.DeleteProfessionalController = DeleteProfessionalController;
