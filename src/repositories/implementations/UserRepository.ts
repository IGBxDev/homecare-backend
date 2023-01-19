import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ObjectID, Repository } from "typeorm";
import { IDataSourse } from "../../dataBase/IDataSourse";
import { IEditUserRequestDTO } from "../../useCases/User/EditUser/IEditUserDTO";

export class UserRepository implements IUsersRepository{
    private repository: Repository<User>

    constructor(
        private dataSourse: IDataSourse
    ){
       this.initialize()        
    }
    async update(user: IEditUserRequestDTO): Promise<void> {
         this.repository.update(user.id, user)
    }
    
    async findById(id: string): Promise<User[]> {
        return await this.repository.findBy({ _id: id })
    }
    
    async findAll(): Promise<User[]> {
       return await this.repository.find();
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.update(id,{ isActive: false })
    }

    async initialize(){
        const dbConnection = await this.dataSourse.connection()
        this.repository = dbConnection.getRepository(User)
    }

    async findByEmail(email: string): Promise<User[]> {
        return await this.repository.findBy({ email: email });
    }
    
    async save(user: User): Promise<void> {
        this.repository.insert(user)        
    }
}