import { User } from "../entities/User";
import { IEditUserRequestDTO } from "../useCases/User/EditUser/IEditUserDTO";

export interface IUsersRepository{
    findByEmail(email: string): Promise<User[]>
    add(user: User): Promise<void>
    delete(id: string): Promise<void>
    all(): Promise<User[]>
    edit(user: IEditUserRequestDTO): Promise<void>
}