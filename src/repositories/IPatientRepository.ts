import { IAddress } from "../entities/Interfaces/IAddress";
import { Patient } from "../entities/Patient";

export interface IPatientRepository{
    add(patient: Patient): Promise<void>
    findById(id: string): Promise<Patient[]>
    delete(id: string): Promise<void>
    all(): Promise<Patient[]>
    findByAddress(address: IAddress): Promise<Patient[]>
}