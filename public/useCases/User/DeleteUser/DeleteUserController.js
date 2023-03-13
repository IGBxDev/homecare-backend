"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
class DeleteUserController {
    constructor(deleteUserCase) {
        this.deleteUserCase = deleteUserCase;
    }
    async handle(request, response) {
        try {
            const { id } = request.params;
            const useDelete = {
                id
            };
            this.deleteUserCase.execute(useDelete);
            response.status(204).send();
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.DeleteUserController = DeleteUserController;
