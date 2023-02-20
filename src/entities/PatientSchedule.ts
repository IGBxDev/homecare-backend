import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Patient } from "./Patient";
import { Schedule } from "./Schedule";

@Entity('PatientScheduling')
export class PatientSchedule{

    @ObjectIdColumn()
    public readonly _id: string

    @Column()
    public patient: Patient

    @Column( type => Schedule)
    public schelude: Schedule[]

    @Column('boolean', { default: true, nullable: false })
    public isActive: boolean

    constructor(props: Omit<PatientSchedule, '_id' | 'isActive'>, _id?: string, isActive?: boolean){
        Object.assign(this, props)

        if(!_id){
            this.isActive = true
        }
    }
}