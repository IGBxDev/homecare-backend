import { Column } from 'typeorm'

export class Address{
    @Column()
    logradouro: string

    @Column()
    number: string

    @Column()
    city: string

    @Column()
    uf: string

    @Column()
    postalCode: string

    @Column()
    complement: string
}