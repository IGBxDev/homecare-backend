import { User } from "../entities/User";
import { IEditUserRequestDTO } from "../useCases/User/EditUser/IEditUserDTO";

export interface IUsersRepository{
    findByEmail(email: string): Promise<User[]>
    save(user: User): Promise<void>
    deleteById(id: string): Promise<void>
    findAll(): Promise<User[]>
    findById(id: string): Promise<User[]>
    update(user: IEditUserRequestDTO): Promise<void>
}