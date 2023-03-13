"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserCase = void 0;
const CustomError_1 = require("../../Error/CustomError");
class DeleteUserCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(userDelete) {
        try {
            if (!userDelete.id || userDelete.id === undefined) {
                throw new CustomError_1.EmptyId();
            }
            this.usersRepository.delete(userDelete.id);
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode);
        }
    }
}
exports.DeleteUserCase = DeleteUserCase;
