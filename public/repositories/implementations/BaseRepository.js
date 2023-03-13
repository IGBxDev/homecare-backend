"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const CustomError_1 = require("../../useCases/Error/CustomError");
class BaseRepository {
    async update(enity) {
        try {
            this.repository.update(enity.id, enity);
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.message, error.statusCode || 500);
        }
    }
    async findById(id) {
        const find = await this.repository.findBy({ _id: id });
        return find;
    }
    async deleteById(id) {
        await this.repository.update(id, { isActive: false });
    }
    async save(entity) {
        this.repository.insert(entity);
    }
    async findAll() {
        const findRepository = await this.repository.find();
        return findRepository;
    }
}
exports.BaseRepository = BaseRepository;
