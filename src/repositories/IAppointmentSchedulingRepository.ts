import { StatusEnum } from "../entities/enum/StatusEnum"
import { PatientScheduling } from "../entities/PatientScheduling"
import { Professional } from "../entities/Professional"

export interface IAppointmentSchedulingRepository{
     professional: Professional    
     registrationDate: Date    
     patiendScheduling: PatientScheduling    
     value: number    
     statusCode: StatusEnum    
     statusDescription: string    
     careRecord: string
}