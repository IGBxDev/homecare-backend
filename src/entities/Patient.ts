import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Address } from "./Address";
import { Gender } from "./Gender";


@Entity('Patient')
export class Patient{

    @ObjectIdColumn()
    public readonly id: string

    @Column()
    public name: string

    @Column()
    public susCard: string

    @Column()
    public genderCode: number

    @Column()
    public genderDescription: string

    @Column()
    public cpf: string

    @Column()
    public nationality: string

    @Column()
    public profession: string

    @Column((type) => Address)
    public address: Address

    @Column()
    public cellPhone: string

    @Column()
    public email: string

    @Column('boolean', { default: true, nullable: false })
    public isActive: boolean

    constructor(props: Omit<Patient, '_id' | 'isActive'>, _id?: string, isActive?: boolean){
        Object.assign(this, props)

        if(!_id){
            this.isActive = true
        }
    }
}