import { EntityManager } from "typeorm"

export interface TEntity {
    entity: EntityManager
}

export interface IBaseRepository{
    save(entity: TEntity): Promise<void>
}