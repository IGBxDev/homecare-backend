import { DataSource, Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { IAddress } from "../../entities/Interfaces/IAddress";
import { Patient } from "../../entities/Patient";
import { IPatientRepository } from "../IPatientRepository";

export class PatientRepository implements IPatientRepository{
    private repository: Repository<Patient>

    constructor(private dataSourse: IDataSourse){
        this.initialize()    
    }
    findByAddress(address: IAddress): Promise<Patient[]> {
        throw new Error("Method not implemented.");
    }
    findAll(): Promise<Patient[]> {
       return this.repository.find()
    }

    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(Patient)
    }

    async save(patient: Patient): Promise<void> {
        this.repository.save(patient)
    }
    
    async findById(id: string): Promise<Patient[]> {
        return this.repository.findBy({ id: id })
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.update(id,{ isActive: false })
    }
    
}