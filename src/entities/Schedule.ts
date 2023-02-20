import { Column, ObjectIdColumn } from "typeorm";

export class Schedule{

    @ObjectIdColumn()
    public _id: string

    @Column()
    public startDate: Date

    @Column()
    public endDate: Date

    @Column()
    public pad: string

    @Column('boolean', { default: true, nullable: false })
    public isActive: Boolean

    constructor(props: Omit<Schedule, '_id' | 'isActive'>, _id?: string, isActive?: boolean ){
        Object.assign(this, props)

        if(!_id){
            this.isActive = true
        }
    }
}