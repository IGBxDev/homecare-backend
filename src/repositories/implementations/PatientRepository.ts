import { IDataSourse } from "../../dataBase/IDataSourse";
import { IAddress } from "../../entities/Interfaces/IAddress";
import { Patient } from "../../entities/Patient";
import { IPatientRepository } from "../IPatientRepository";
import { BaseRepository } from "./BaseRepository";

export class PatientRepository extends BaseRepository implements IPatientRepository{

    constructor(
        public dataSourse: IDataSourse
    )
        {
        super()
        this.initialize()    
    }

    findByAddress(address: IAddress): Promise<Patient[]> {
        throw new Error("Method not implemented.");
    }

    async all(): Promise<Patient[]> {
       return this.repository.find()
    }

    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(Patient)
    }

    async add(patient: Patient): Promise<void> {
        this.repository.save(patient)
    }
    
    async findById(id: string): Promise<Patient[]> {
        return this.repository.findBy({ id: id })
    }

    async delete(id: string): Promise<void> {
        await this.repository.update(id,{ isActive: false })
    }
    
}