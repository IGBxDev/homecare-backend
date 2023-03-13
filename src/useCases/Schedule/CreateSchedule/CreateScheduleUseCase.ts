import { Schedule } from "../../../entities/Schedule";
import { ScheduleRepository } from "../../../repositories/implementations/ScheduleRepository";
import { IScheduleRepository } from "../../../repositories/IScheduleRepository";
import { ICreateScheduleRequestDTO } from "./ICreateScheduleDTO";

export class CreateScheduleUseCase{
    
    constructor(private repository: IScheduleRepository){}
    
    execute(schedule: ICreateScheduleRequestDTO){
        const _schedule = new Schedule(schedule)
        this.repository.save(_schedule)
    }
}