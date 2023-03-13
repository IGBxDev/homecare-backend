"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserUseCase = void 0;
const CustomError_1 = require("../../Error/CustomError");
const EditUserErrors_1 = require("./EditUserErrors");
class EditUserUseCase {
    constructor(useRepository) {
        this.useRepository = useRepository;
    }
    async execute(data) {
        var _a;
        try {
            if (data.email === '' || data.email === undefined) {
                throw new EditUserErrors_1.InvalidEmail();
            }
            if (data.name === '' || data.name === undefined) {
                throw new EditUserErrors_1.InvalidName();
            }
            if (data.id === '' || data.id === undefined) {
                throw new EditUserErrors_1.InvalidaId();
            }
            const user = {
                id: data.id,
                email: data.email,
                name: data.name
            };
            const userAlreadyExists = await this.useRepository.findByEmail(user.email);
            if (userAlreadyExists.length === 0) {
                throw new EditUserErrors_1.UserNotFound();
            }
            if (((_a = userAlreadyExists[0]) === null || _a === void 0 ? void 0 : _a._id.toString()) != user.id.toString()) {
                throw new EditUserErrors_1.EmailIsDifferentFromIdFound();
            }
            this.useRepository.edit(user);
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode || 500);
        }
    }
}
exports.EditUserUseCase = EditUserUseCase;
