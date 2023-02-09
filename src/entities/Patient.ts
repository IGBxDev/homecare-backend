import { Column, Entity } from "typeorm";
import { Address } from "./Address";
import { Genero } from "./Genero";


@Entity()
export class Patient{

    @Column()
    public readonly id: string

    @Column()
    public name: string

    @Column()
    public susCard: string

    @Column( (type) => Genero)
    public generoCode: Genero

    @Column()
    public generoDescription: string

    @Column()
    public cpf: string

    @Column()
    public nationality: string

    @Column()
    public Profession: string

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