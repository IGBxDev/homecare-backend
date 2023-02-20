import { BaseEntity, EntityManager, Repository } from "typeorm";
import { IBaseRepository } from "../IBaseRepository";

export class BaseRepository<T extends Object> implements IBaseRepository<T>{
    
    async save(entity: T): Promise<void> {
        this.save(entity)
    }

}