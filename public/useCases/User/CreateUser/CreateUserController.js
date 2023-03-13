"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }
    async handle(request, response) {
        const { name, email, password, isActive } = request.body;
        const createAt = new Date;
        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password,
                isActive
            });
            return response.status(200).send();
        }
        catch (error) {
            return response.status(error.statusCode).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
