"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleRepository = void 0;
const Schedule_1 = require("../../entities/Schedule");
class ScheduleRepository {
    constructor(dataSourse) {
        this.dataSourse = dataSourse;
        this.initialize();
    }
    async update(schedule) {
        this.repository.update({ _id: schedule._id }, {
            startDate: schedule.startDate,
            endDate: schedule.endDate,
            pad: schedule.pad
        });
    }
    async deleteById(id) {
        this.repository.update({ _id: id }, { isActive: false });
    }
    async initialize() {
        const dbConnection = await this.dataSourse.connection();
        this.repository = dbConnection.getRepository(Schedule_1.Schedule);
    }
    async save(schedule) {
        this.repository.save(schedule);
    }
    async findAll() {
        const schedule = await this.repository.find();
        return schedule;
    }
    async findById(id) {
        const findSchedule = await this.repository.findBy({ _id: id });
        return findSchedule;
    }
    async findByStartDateAndEndDate(startDate, endDate) {
        const findByDate = await this.repository.findBy({ startDate: startDate, endDate: endDate });
        return findByDate;
    }
}
exports.ScheduleRepository = ScheduleRepository;
