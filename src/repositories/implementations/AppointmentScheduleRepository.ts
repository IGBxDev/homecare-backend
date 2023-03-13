import { Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { AppointmentSchedule } from "../../entities/AppointmentSchedule"
import { IAppointmentSchedulingRepository } from "../IAppointmentSchedulingRepository";
export class AppointmentSchedulingRepository implements IAppointmentSchedulingRepository{
    private repository: Repository<AppointmentSchedule>

    constructor(private dataSourse: IDataSourse){
       this.initialize()
    }

    async initialize (){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(AppointmentSchedule)
    }

    async save(data: AppointmentSchedule): Promise<void> {
        this.repository.save(data)
    }

    async findAll(): Promise<AppointmentSchedule[]> {
        return this.repository.find()
    }
    
    async findById(id: string): Promise<AppointmentSchedule[]> {
        return await this.repository.findBy({ _id: id })
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.update(id, { isActive: false })
    }

}