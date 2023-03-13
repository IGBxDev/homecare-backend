"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
class GetUserController {
    constructor(getUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }
    async handle(request, response) {
        try {
            const users = await this.getUserUseCase.execute();
            return response.status(200).json({
                response: users
            });
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.GetUserController = GetUserController;
