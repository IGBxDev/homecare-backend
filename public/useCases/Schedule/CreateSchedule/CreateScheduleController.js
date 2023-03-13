"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateScheduleController = void 0;
class CreateScheduleController {
    constructor(createScheduleUseCase) {
        this.createScheduleUseCase = createScheduleUseCase;
    }
    async handle(request, response) {
        try {
            const schedule = request.body;
            this.createScheduleUseCase.execute(schedule);
            return response.status(200).send();
        }
        catch (error) {
            return response.status(error.statusCode || 500).json({ message: error.message || 'Internal error' });
        }
    }
}
exports.CreateScheduleController = CreateScheduleController;
