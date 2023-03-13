import { Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { Schedule } from "../../entities/Schedule";
import { IScheduleRepository } from "../IScheduleRepository";

export class ScheduleRepository implements IScheduleRepository{
    private repository: Repository<Schedule>

    constructor(private dataSourse: IDataSourse){
        this.initialize()  
    }
    
    async update(schedule: Schedule): Promise<void> {
        this.repository.update({_id: schedule._id }, {
            startDate: schedule.startDate,
            endDate: schedule.endDate,
            pad: schedule.pad
        })
    }
    
    async deleteById(id: string): Promise<void> {
        this.repository.update({ _id: id}, {isActive: false })
    }


    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(Schedule)
    }

    async save(schedule: Schedule): Promise<void> {
        this.repository.save(schedule)
    }

    async findAll(): Promise<Schedule[]> {
        const schedule = await this.repository.find()
        return schedule
    }
    
    async findById(id: string): Promise<Schedule[]> {
        const findSchedule = await this.repository.findBy({ _id: id })
        return findSchedule
    }

    async findByStartDateAndEndDate(startDate: Date, endDate: Date): Promise<Schedule[]> {
        const findByDate = await this.repository.findBy({ startDate: startDate, endDate: endDate})
        return findByDate
    }
}