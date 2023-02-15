import { Address } from "../../../entities/Address"
import { BankAccount } from "../../../entities/BankAccount"
import { Region } from "../../../entities/Region"
import { Specialty } from "../../../entities/Specialty"

export interface ICreateProfessionalRequestDTO{
    fullName: string
    email: string
    mobile: string
    cpf: string
    boardNumber: string
    regionZoneCode: number
    regionZoneDescription: string
    address: Address
    bankAccount: BankAccount[]
    specialty: Specialty[]
}