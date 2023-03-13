"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserUseCase = void 0;
const ts_custom_error_1 = require("ts-custom-error");
class GetUserUseCase {
    constructor(useRepository) {
        this.useRepository = useRepository;
    }
    async execute() {
        try {
            return await this.useRepository.all();
        }
        catch (error) {
            throw new ts_custom_error_1.CustomError(error.messagem, error.statusCode);
        }
    }
}
exports.GetUserUseCase = GetUserUseCase;
