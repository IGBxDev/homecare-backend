"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateScheduleUseCase = void 0;
const Schedule_1 = require("../../../entities/Schedule");
class CreateScheduleUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(schedule) {
        const _schedule = new Schedule_1.Schedule(schedule);
        this.repository.save(_schedule);
    }
}
exports.CreateScheduleUseCase = CreateScheduleUseCase;
