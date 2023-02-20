import { BaseEntity, Entity, EntityManager, Repository } from "typeorm"
export interface IBaseRepository<T extends Object>{
    save(entity: T): Promise<void>   
}