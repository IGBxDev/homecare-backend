import { Entity, Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { IBaseRepository } from "../IBaseRepository";
import { TEntity } from "../IBaseRepository";
export class BaseRepository implements IBaseRepository{
    

    constructor(
        private dataSourse: IDataSourse,
        private repository: Repository<TEntity>
    ){
       this.initialize()        
    }
    
    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository<TEntity>(Entity)
    }

    async save(entity: TEntity): Promise<void> {
        this.repository.save(entity)
    }
}