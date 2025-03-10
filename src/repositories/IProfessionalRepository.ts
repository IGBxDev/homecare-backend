import { IAddress } from "../entities/Interfaces/IAddress"
import { Professional } from "../entities/Professional"

export interface IProfessionalRepository{
    findSpecialty(specialty: string): Promise<Professional[]>   
    save(professional: Professional): Promise<void>
    findAll(): Promise<Professional[]>
    deleteById(id: string): Promise<void>
}