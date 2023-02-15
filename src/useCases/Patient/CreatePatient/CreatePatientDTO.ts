import { Address } from "../../../entities/Address"
import { Gender } from "../../../entities/Gender"

export interface ICreatePatientRequestDTO{
    id: string
    name: string
    susCard: string
    genderCode: number
    genderDescription: string
    cpf: string
    nationality: string
    Profession: string
    address: Address
    cellPhone: string
    email: string
    isActive: boolean
}