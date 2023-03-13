import { Schedule } from "../entities/Schedule";

export interface IScheduleRepository{
    save(schedule: Schedule): Promise<void>
    findAll(): Promise<Schedule[]>
    findById(id: string): Promise<Schedule[]>
    findByStartDateAndEndDate(startDate: Date, endDate: Date): Promise<Schedule[]>
    update(schedule: Schedule): Promise<void>
    deleteById(id: string):Promise<void>
}