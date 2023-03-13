"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePatientController = void 0;
class DeletePatientController {
    constructor(deletePatientUseCase) {
        this.deletePatientUseCase = deletePatientUseCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.body;
            this.deletePatientUseCase.execute(id);
            return response.status(202).end();
        }
        catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message || 'Internal error' });
        }
    }
}
exports.DeletePatientController = DeletePatientController;
