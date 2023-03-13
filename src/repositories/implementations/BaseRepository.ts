import { Repository } from "typeorm";
import { CustomError } from "../../useCases/Error/CustomError";
import { IBaseRepository } from "../IBaseRepository";
export class BaseRepository implements IBaseRepository{
    public repository: Repository<any>

    async update(enity: any): Promise<void> {
        try {
            this.repository.update(enity.id, enity)   
        } catch (error) {
            throw new CustomError(error.message, error.statusCode || 500)
        }
         
    }

    async findById(id: string): Promise<any[]> {
        const find = await this.repository.findBy({_id: id })
        return find
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.update(id,{ isActive: false })
    }

    async save(entity: any): Promise<void> {
        this.repository.insert(entity) 
    }

    async findAll(): Promise<any[]> {
        const findRepository = await this.repository.find()
        return findRepository
    }
}