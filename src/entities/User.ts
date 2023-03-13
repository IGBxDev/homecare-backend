import { Entity, Column, ObjectIdColumn, CreateDateColumn } from 'typeorm'
import moment from 'moment';
@Entity("Users")
export class User {
    
    @ObjectIdColumn()
    public readonly _id: string;

    @Column()
    public name: string;
    
    @Column()
    public email: string;
    
    @Column()
    public password: string;

    @CreateDateColumn({ type: 'timestamp', default: 'CURRENT_TIMESTAMP' })
    createdAt: Date

    @Column('boolean', {default: true , nullable: false})
    public isActive: boolean;
    
    constructor(props: Omit<User, '_id' | 'isActive' | 'createdAt'>, _id?: string, isActive?: boolean, createdAt?: Date){
        Object.assign(this, props)
        isActive = true
        createdAt = new Date

        if(!_id){
            this.isActive = isActive
            this.createdAt = createdAt
        }
    }
}