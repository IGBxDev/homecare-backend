import { AppointmentScheduling } from "../../entities/AppointmentScheduling"

export interface AppointmentSchedulingRepository{
    save():Promise<void>
    findAll():Promise<AppointmentScheduling[]>
    findById(id: string): Promise<void>
    deleteById(id: string):Promise<void>
}