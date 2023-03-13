"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../../entities/User");
const BaseRepository_1 = require("./BaseRepository");
const CustomError_1 = require("../../useCases/Error/CustomError");
class UserRepository extends BaseRepository_1.BaseRepository {
    constructor(dataSourse) {
        super();
        this.dataSourse = dataSourse;
        this.initialize();
    }
    async edit(user) {
        this.update(user);
    }
    async findById(id) {
        const user = await this.findById(id);
        return user;
    }
    async all() {
        return await this.findAll();
    }
    async delete(id) {
        await this.deleteById(id);
    }
    async initialize() {
        const dbConnection = await this.dataSourse.connection();
        this.repository = dbConnection.getRepository(User_1.User);
    }
    async findByEmail(email) {
        try {
            return await this.repository.findBy({ email: email });
        }
        catch (error) {
            throw new CustomError_1.CustomError(error.statusCode || 500, error.message);
        }
    }
    async add(user) {
        this.save(user);
    }
}
exports.UserRepository = UserRepository;
