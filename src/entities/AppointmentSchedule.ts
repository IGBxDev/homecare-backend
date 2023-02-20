import { Column, Entity, ObjectIdColumn } from "typeorm";
import { StatusEnum } from "./enum/StatusEnum";
import { Patient } from "./Patient";
import { PatientSchedule } from "./PatientSchedule";
import { Professional } from "./Professional";

@Entity('AppointmentScheduling')
export class AppointmentSchedule{

    @ObjectIdColumn()
    public readonly _id: string

    @Column( type => Professional)
    public professional: Professional

    @Column()
    private registrationDate: Date

    @Column(type => PatientSchedule)
    public patientScheduling: PatientSchedule

    @Column()
    public startDateShift: Date

    @Column()
    public endDateShift: Date

    @Column()
    public value: number

    @Column()
    public statusCode: StatusEnum

    @Column()
    public statusDescription: string

    @Column()
    public careRecord: string

    @Column('boolean', { default: true, nullable: false })
    public isActive: boolean

    constructor(props: Omit<Patient, '_id' | 'isActive'>, _id?: string, isActive?: boolean){
        Object.assign(this, props)

        if(!_id){
            this.isActive = true
        }
    }

}