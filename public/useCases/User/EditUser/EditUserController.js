"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserController = void 0;
class EditUserController {
    constructor(editUserUseCase) {
        this.editUserUseCase = editUserUseCase;
    }
    async handle(request, response) {
        const { name, email } = request.body;
        const { id } = request.params;
        try {
            await this.editUserUseCase.execute({
                id,
                name,
                email
            });
            return response.status(200).send({
                message: 'Registro atualizado com sucesso'
            });
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.EditUserController = EditUserController;
