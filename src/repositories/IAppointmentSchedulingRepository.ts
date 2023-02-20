import { AppointmentScheduling } from "../entities/AppointmentSchedule"

export interface IAppointmentSchedulingRepository{
     save(data: AppointmentScheduling ): Promise<void>
     findAll():Promise<AppointmentScheduling[]>
     findById(id: string): Promise<AppointmentScheduling[]>
     deleteById(id: string): Promise<void>
}