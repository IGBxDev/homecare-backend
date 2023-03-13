import { AppointmentSchedule } from "../entities/AppointmentSchedule"

export interface IAppointmentSchedulingRepository{
     save(data: AppointmentSchedule ): Promise<void>
     findAll():Promise<AppointmentSchedule[]>
     findById(id: string): Promise<AppointmentSchedule[]>
     deleteById(id: string): Promise<void>
}