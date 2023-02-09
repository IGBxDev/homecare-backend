import { Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { Professional } from "../../entities/Professional";
import { IProfessionalRepository } from "../IProfessionalRepository";
import { BaseRepository } from "./BaseRepository";


export class ProfessionalRepository implements IProfessionalRepository {
    private repository: Repository<Professional>
    constructor(
        private dataSourse: IDataSourse
    ){
       this.initialize()        
    }
    async deleteById(id: string): Promise<void> {
        await this.repository.update(id,{ isActive: false })
    }
    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(Professional)
    }

    findSpecialty(specialty: string): Promise<Professional[]> {
        throw new Error("Method not implemented.");
    }
    findByAddress(): Promise<Professional[]> {
        throw new Error("Method not implemented.");
    }
    async save(professional: Professional): Promise<void> {
       this.repository.save(professional)
    }
    findAll(): Promise<Professional[]> {
        throw new Error("Method not implemented.");
    }
    
}