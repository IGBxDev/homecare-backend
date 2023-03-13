import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { IEditUserRequestDTO } from "../../useCases/User/EditUser/IEditUserDTO";
import { BaseRepository } from "./BaseRepository";
import { CustomError } from "../../useCases/Error/CustomError";

export class UserRepository extends BaseRepository implements IUsersRepository {        
    
    constructor(
        public dataSourse: IDataSourse
    ){
        super()        
        this.initialize()
    }
    
    async edit(user: IEditUserRequestDTO): Promise<void> {
         this.update(user)
    }
    
    async findById(id: string): Promise<User[]> {
        const user = await this.findById(id)
        return user
    }
    
    async all(): Promise<User[]> {
       return await this.findAll()
    }

    async delete(id: string): Promise<void> {
        await this.deleteById(id)
    }

    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(User)
    }

    async findByEmail(email: string): Promise<User[]> {
        try {
            return await this.repository.findBy({ email: email });    
        } catch (error) {
            throw new CustomError(error.statusCode || 500, error.message )
        }
        
    }
    
    public async add(user: User): Promise<void> {
        this.save(user)
    }
}