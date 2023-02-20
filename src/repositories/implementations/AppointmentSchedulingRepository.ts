import { Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { AppointmentScheduling } from "../../entities/AppointmentSchedule"
import { IAppointmentSchedulingRepository } from "../IAppointmentSchedulingRepository";
export class AppointmentSchedulingRepository implements IAppointmentSchedulingRepository{
    private repository: Repository<AppointmentScheduling>

    constructor(private dataSourse: IDataSourse){
       this.initialize()
    }

    async initialize (){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(AppointmentScheduling)
    }

    async save(data: AppointmentScheduling): Promise<void> {
        this.repository.save(data)
    }

    async findAll(): Promise<AppointmentScheduling[]> {
        return this.repository.find()
    }
    
    async findById(id: string): Promise<AppointmentScheduling[]> {
        return await this.repository.findBy({ _id: id })
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.update(id, { isActive: false })
    }

}