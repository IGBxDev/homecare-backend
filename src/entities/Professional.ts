import { Column, Entity, ObjectIdColumn } from 'typeorm'
import { Address } from './Address'
import { BankAccount } from './BankAccount'
import { Region } from './Region'
import { Specialty } from './Specialty'

@Entity('Professional')
export class Professional{

    @ObjectIdColumn()
    private readonly id: string

    @Column()
    public fullName: string

    @Column()
    public email: string

    @Column()
    public mobile: string

    @Column()
    public cpf: string

    @Column({ comment: 'Número do conselho' })
    public boardNumber: string

    @Column( (type) => Region)
    public regionZoneCode: Region

    @Column({ comment: 'Descrição da região, Zona Norte, Zona Sul, Zona Oeste, Zona Leste ou Zona Central' })
    public regionZoneDescription: string

    @Column( (type) => Address )
    address: Address

    @Column((type) => BankAccount )
    public bankAccount: BankAccount[]
    

    @Column( (type) => Specialty)
    public specialty: Specialty[]

    @Column('boolean', { default: true, nullable: false })
    public isActive: boolean

    constructor(props: Omit<Professional, '_id' | 'isActive'>, _id?: string, isActive?: boolean){
        Object.assign(this, props)

        if(!_id){
            this.isActive = true
        }
    }
}
