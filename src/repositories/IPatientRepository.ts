import { IAddress } from "../entities/Interfaces/IAddress";
import { Patient } from "../entities/Patient";

export interface IPatientRepository{
    save(patient: Patient): Promise<void>
    findById(id: string): Promise<Patient[]>
    deleteById(id: string): Promise<void>
    findAll(): Promise<Patient[]>
    findByAddress(address: IAddress): Promise<Patient[]>
}