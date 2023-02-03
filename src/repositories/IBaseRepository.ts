
export interface IBaseRepository{
    save(entity: Object): Promise<void>
}