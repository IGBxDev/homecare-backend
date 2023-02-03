import { IBaseRepository } from "../IBaseRepository";

export class BaseRepository implements IBaseRepository{
    
    save(entity: Object): Promise<void> {
        throw new Error("Method not implemented.");
    }

}