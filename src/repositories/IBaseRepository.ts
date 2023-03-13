export interface IBaseRepository{
    save(entity: any):Promise<void>    
    findAll(): Promise<any[]>
    deleteById(id: string): Promise<void>
    findById(id: string): Promise<any[]>
    update(entity: any): Promise<void>
}