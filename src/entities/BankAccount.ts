import { Column } from "typeorm";
import { AccountTypeEnum } from "./enum/ProfessionalEnums";

export class BankAccount{
    @Column()
    accountNumber: string
    
    @Column()
    agencyNumber: number
    
    @Column()
    bankCode: number
    
    @Column()
    accountType: AccountTypeEnum
}