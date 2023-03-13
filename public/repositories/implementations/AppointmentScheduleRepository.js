"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchedulingRepository = void 0;
const AppointmentSchedule_1 = require("../../entities/AppointmentSchedule");
class AppointmentSchedulingRepository {
    constructor(dataSourse) {
        this.dataSourse = dataSourse;
        this.initialize();
    }
    async initialize() {
        const dbConnection = await this.dataSourse.connection();
        this.repository = dbConnection.getRepository(AppointmentSchedule_1.AppointmentSchedule);
    }
    async save(data) {
        this.repository.save(data);
    }
    async findAll() {
        return this.repository.find();
    }
    async findById(id) {
        return await this.repository.findBy({ _id: id });
    }
    async deleteById(id) {
        await this.repository.update(id, { isActive: false });
    }
}
exports.AppointmentSchedulingRepository = AppointmentSchedulingRepository;
